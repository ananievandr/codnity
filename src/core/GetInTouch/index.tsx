import React, { ReactElement, useState } from 'react';
import { Box, Button, Grid } from '@material-ui/core';

import { CodinityFormInput } from 'uikit/CodnityFormInput';
import { CodnityLabel } from 'uikit/CodnityFormInput/styles';
import { SectionHeader } from 'uikit/SectionHeader';
import withScrollToTop from 'hocs/ScrollToTop';

import { useStyles } from './styles';
import { ToggleButton } from './ToggleButton';
import CodnityGoogleMap from './CodnityGoogleMap';

function GetInTouch(): ReactElement {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [design, setDesign] = useState(false);
  const [development, setDevelopment] = useState(false);
  const [consultation, setConsultation] = useState(false);

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

  const onFormSubmit = () => {
    const requestData = {
      name,
      lastName,
      email,
      phone,
      message,
      design,
      development,
      consultation,
    };
    console.log(requestData);
  };

  return (
    <Grid container className={classes.root} direction="column">
      <SectionHeader className={classes.title} title="Get in [touch]" />
      <form noValidate autoComplete="off" className={classes.form}>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <CodinityFormInput name="name" placeholder="Your name" label="Your name" onChange={setName} />
            <CodinityFormInput name="lastName" placeholder="Your last name" label="Last Name" onChange={setLastName} />
          </Grid>
          <Grid item md={6}>
            <CodinityFormInput name="email" placeholder="Your email" label="Email" onChange={setEmail} />
            <CodinityFormInput name="phone" placeholder="Your phone number" label="Phone" onChange={setPhone} />
          </Grid>
        </Grid>
        <CodnityLabel className={classes.serviceLabel} focused={false}>
          Pick a Necessary Service
        </CodnityLabel>
        <Grid container>
          <Grid item md={4} sm={12} xs={12} className={classes.toggleButton}>
            <ToggleButton
              name="development"
              content="Development"
              checked={development}
              onChange={handleSeriviceChange}
            />
          </Grid>
          <Grid item md={4} sm={12} xs={12} className={classes.toggleButton}>
            <ToggleButton
              name="consultation"
              content="IT Consultation"
              checked={consultation}
              onChange={handleSeriviceChange}
            />
          </Grid>
          <Grid item md={4} sm={12} xs={12} className={classes.toggleButton}>
            <ToggleButton name="design" content="UX/UI" checked={design} onChange={handleSeriviceChange} />
          </Grid>
        </Grid>
        <Box component="div" marginTop="50px">
          <CodinityFormInput
            name="message"
            placeholder="Write your message"
            label="Message/Question"
            multiline
            rows={5}
            onChange={setMessage}
          />
        </Box>

        <Box component="div" className={classes.submitButtonWrapper}>
          <Button className={classes.button} color="primary" onClick={onFormSubmit}>
            send message
          </Button>
        </Box>
      </form>
      <Box component="div" height="600px" width="100%" margin="100px 0 60px">
        <CodnityGoogleMap />
      </Box>
    </Grid>
  );
}

export default withScrollToTop(GetInTouch);
