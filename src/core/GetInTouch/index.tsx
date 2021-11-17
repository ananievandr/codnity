import React, { ReactElement, useState } from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { useIntl } from 'react-intl';

import { CodinityFormInput } from 'uikit/CodnityFormInput';
import { CodnityLabel } from 'uikit/CodnityFormInput/styles';
import { SectionHeader } from 'uikit/SectionHeader';
import withScrollToTop from 'hocs/ScrollToTop';
import { Loader } from 'uikit/Loader';
import { getUrl } from 'utils/http';
import validators from 'utils/formSchema';
import FeedbackModal from 'core/FeedbackModal';

import { useStyles } from './styles';
import { ToggleButton } from './ToggleButton';
import CodnityGoogleMap from './CodnityGoogleMap';
import { IFormData } from './interfaces';

function GetInTouch(): ReactElement {
  const classes = useStyles();
  const [design, setDesign] = useState(false);
  const [development, setDevelopment] = useState(false);
  const [consultation, setConsultation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const defaultValues = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const FormSchema = yup.object().shape({
    name: validators.name,
    lastName: validators.field,
    email: validators.email,
    phone: validators.phone,
    message: validators.message,
  });

  const { errors, control, handleSubmit, reset } = useForm<IFormData>({
    validationSchema: FormSchema,
    mode: 'onBlur',
    defaultValues,
  });

  const handleSeriviceChange = (checked: boolean, name: string) => {
    if (name === 'design') {
      setDesign(checked);
    }
    if (name === 'development') {
      setDevelopment(checked);
    }
    if (name === 'consultation') {
      setConsultation(checked);
    }
  };
  const clearFormData = () => {
    setDesign(false);
    setDevelopment(false);
    setConsultation(false);
    reset({
      ...defaultValues,
    });
  };

  const onFormSubmit = ({ name, lastName, phone, email, message }: IFormData) => {
    setLoading(true);
    fetch(getUrl('form'), {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        lastName,
        email,
        phone,
        message,
        design,
        development,
        consultation,
      }),
    })
      .then(res => res.json())
      .then(() => {
        clearFormData();
        setOpenConfirm(true);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const intl = useIntl();
  const getLabel = (titleId?: string) => (titleId ? intl.formatMessage({ id: titleId }) || '' : '');

  return (
    <Grid container className={classes.root} direction="column">
      <SectionHeader className={classes.title} title="getInTouch.header" />
      <form noValidate autoComplete="off" className={classes.form}>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <Controller
              as={<CodinityFormInput name="name" label={getLabel('getInTouch.name')} />}
              name="name"
              control={control}
              placeholder={getLabel('getInTouch.namePlaceholder')}
              errorMessage={getLabel(errors?.name?.message)}
            />
            <Controller
              as={<CodinityFormInput name="name" label={getLabel('getInTouch.lastName')} />}
              name="lastName"
              control={control}
              placeholder={getLabel('getInTouch.lastNamePlaceholder')}
              errorMessage={getLabel(errors?.lastName?.message)}
            />
          </Grid>
          <Grid item md={6}>
            <Controller
              as={<CodinityFormInput name="email" label={getLabel('getInTouch.email')} />}
              name="email"
              control={control}
              placeholder={getLabel('getInTouch.emailPlaceholder')}
              errorMessage={getLabel(errors?.email?.message)}
            />
            <Controller
              as={<CodinityFormInput name="phone" label={getLabel('getInTouch.phone')} />}
              name="phone"
              control={control}
              placeholder={getLabel('getInTouch.phonePlaceholder')}
              errorMessage={getLabel(errors?.phone?.message)}
            />
          </Grid>
        </Grid>
        <CodnityLabel className={classes.serviceLabel} focused={false}>
          {getLabel('getInTouch.serviceTitle')}
        </CodnityLabel>
        <Grid container>
          <Grid item md={4} sm={12} xs={12} className={classes.toggleButton}>
            <ToggleButton
              name="development"
              content={getLabel('getInTouch.service1')}
              checked={development}
              onChange={handleSeriviceChange}
            />
          </Grid>
          <Grid item md={4} sm={12} xs={12} className={classes.toggleButton}>
            <ToggleButton
              name="consultation"
              content={getLabel('getInTouch.service2')}
              checked={consultation}
              onChange={handleSeriviceChange}
            />
          </Grid>
          <Grid item md={4} sm={12} xs={12} className={classes.toggleButton}>
            <ToggleButton
              name="design"
              content={getLabel('getInTouch.service3')}
              checked={design}
              onChange={handleSeriviceChange}
            />
          </Grid>
        </Grid>
        <Box component="div" marginTop="50px">
          <Controller
            as={<CodinityFormInput name="message" label={getLabel('getInTouch.message')} />}
            name="message"
            control={control}
            placeholder={getLabel('getInTouch.messagePlaceholder')}
            multiline
            rows={5}
            errorMessage={getLabel(errors?.message?.message)}
          />
        </Box>

        <Box component="div" className={classes.submitButtonWrapper}>
          <Button className={classes.button} color="primary" onClick={handleSubmit(onFormSubmit)}>
            {loading && <Loader />}
            <span>{getLabel('getInTouch.button')}</span>
          </Button>
        </Box>
        <div className={classes.greenCircle} />
        <div className={classes.greenBigCircle} />
        <div className={classes.yellowCircle} />
        <div className={classes.redCircle} />
      </form>
      <Box component="div" height="600px" width="100%" margin="100px 0 60px">
        <CodnityGoogleMap />
      </Box>
      <FeedbackModal open={openConfirm} onClose={() => setOpenConfirm(false)} />
    </Grid>
  );
}

export default withScrollToTop(GetInTouch);
