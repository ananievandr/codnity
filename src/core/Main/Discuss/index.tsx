import React, { ChangeEvent, ReactElement, useCallback, useState } from 'react';
import { Box, Button, FormControlLabel, Grid, Typography } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { useIntl } from 'react-intl';

import { CodinityFormInput } from 'uikit/CodnityFormInput';
import FileUploading, { FileListType } from 'uikit/FileUploading';
import { SectionHeader } from 'uikit/SectionHeader';
import { CodnityCheckbox } from 'uikit/CodnityCheckbox';
import { Loader } from 'uikit/Loader';
import { getUrl } from 'utils/http';
import validators from 'utils/formSchema';

import { useStyles } from './styles';
import { IFormData } from './interfaces';
import FeedbackModal from 'core/FeedbackModal';

function Discuss(): ReactElement {
  const classes = useStyles();
  const [nda, setNda] = useState(false);
  const [files, setFiles] = useState<FileListType>([]);
  const [loading, setLoading] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const defaultValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const FormSchema = yup.object().shape({
    name: validators.name,
    email: validators.email,
    phone: validators.phone,
    message: validators.message,
  });

  const { errors, control, handleSubmit, reset } = useForm<IFormData>({
    validationSchema: FormSchema,
    mode: 'onBlur',
    defaultValues,
  });

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setNda(event.target.checked);
  }, []);

  const onChange = (list: FileListType) => {
    setFiles(list);
  };

  const clearFormData = () => {
    setFiles([]);
    setNda(false);
    reset({
      ...defaultValues,
    });
  };

  const onFormSubmit = ({ name, phone, email, message }: IFormData) => {
    setLoading(true);
    fetch(getUrl('form'), {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        phone,
        email,
        message,
        needNda: nda,
        files: files.map(item => {
          return {
            name: item.file?.name,
            dataUrl: item.dataURL,
          };
        }),
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

  const getFileFieldValue = useCallback((): string | undefined => {
    if (files.length === 1) {
      return files[0].file?.name;
    }

    if (files.length > 1) {
      return `${files.length} items`;
    }

    return '';
  }, [files]);

  const intl = useIntl();
  const getLabel = (titleId?: string) => (titleId ? intl.formatMessage({ id: titleId }) || '' : '');

  return (
    <Grid container className={classes.root} direction="column">
      <SectionHeader title="main.discuss.header" className={classes.title} />
      <form noValidate autoComplete="off" className={classes.form}>
        <Grid container spacing={4}>
          <Grid item md={6} sm={12}>
            <Controller
              as={<CodinityFormInput name="name" label={getLabel('main.discuss.name')} />}
              name="name"
              control={control}
              placeholder={getLabel('main.discuss.namePlaceholder')}
              errorMessage={getLabel(errors?.name?.message)}
            />
            <Controller
              as={<CodinityFormInput name="phone" label={getLabel('main.discuss.phone')} />}
              name="phone"
              control={control}
              placeholder={getLabel('main.discuss.phonePlaceholder')}
              errorMessage={getLabel(errors?.phone?.message)}
            />
          </Grid>
          <Grid item md={6} sm={12}>
            <Controller
              as={<CodinityFormInput name="email" label={getLabel('main.discuss.email')} />}
              name="email"
              control={control}
              placeholder={getLabel('main.discuss.emailPlaceholder')}
              errorMessage={getLabel(errors?.email?.message)}
            />
            <FileUploading
              value={files}
              onChange={onChange}
              acceptType={['png', 'jpg', 'jpeg', 'doc', 'docx', 'pdf', 'odf']}
              maxFileSize={5242880}
              multiple
            >
              {({ imageList, errors, onImageUpload }) => (
                <CodinityFormInput
                  name="files"
                  placeholder={getLabel('main.discuss.selectFiles')}
                  label={getLabel('main.discuss.attachFiles')}
                  onClick={onImageUpload}
                  upload
                  value={getFileFieldValue()}
                  errorMessage={errors?.maxFileSize ? getLabel('validation.maxFileSize') : ''}
                />
              )}
            </FileUploading>
          </Grid>
        </Grid>
        <Box component="div" marginTop="32px">
          <Controller
            as={<CodinityFormInput name="message" label={getLabel('main.discuss.message')} />}
            name="message"
            control={control}
            placeholder={getLabel('main.discuss.messagePlaceholder')}
            multiline
            rows={5}
            errorMessage={getLabel(errors?.message?.message)}
          />
        </Box>
        <Grid container alignItems="center" justify="space-between">
          <Grid item lg={8} md={12}>
            <Typography variant="body2">
              {getLabel('main.discuss.privacyPolicy1')}{' '}
              <a className={classes.link} target="_blank" href="#">
                {getLabel('main.discuss.privacyPolicy2')}.
              </a>
            </Typography>
          </Grid>
          <Grid item lg={4} md={12}>
            <Box component="div" className={classes.checkboxWrapper}>
              <FormControlLabel
                control={<CodnityCheckbox checked={nda} onChange={handleChange} name="nda" />}
                label={getLabel('main.discuss.nda')}
                className={classes.checkbox}
              />
            </Box>
          </Grid>
        </Grid>
        <Box component="div" className={classes.buttonWrapper}>
          <Button className={classes.button} color="primary" onClick={handleSubmit(onFormSubmit)}>
            {loading && <Loader />}
            <span>{getLabel('main.discuss.button')}</span>
          </Button>
        </Box>
      </form>
      <FeedbackModal open={openConfirm} onClose={() => setOpenConfirm(false)} />
      <div className={classes.greenCircle} />
      <div className={classes.greenBigCircle} />
      <div className={classes.violetCircle} />
      <div className={classes.redCircle} />
    </Grid>
  );
}

export { Discuss };
