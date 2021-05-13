import React, { ChangeEvent, ReactElement, useCallback, useState } from 'react';
import { Box, Button, FormControlLabel, Grid, Typography } from '@material-ui/core';

import { CodinityFormInput } from 'uikit/CodnityFormInput';
import FileUploading, { FileListType } from 'uikit/FileUploading';
import { SectionHeader } from 'uikit/SectionHeader';

import { useStyles } from './styles';
import { CodnityCheckbox } from 'uikit/CodnityCheckbox';

function Discuss(): ReactElement {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [nda, setNda] = useState(false);
  const [files, setFiles] = useState<FileListType>([]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setNda(event.target.checked);
  }, []);

  const onChange = (list: FileListType) => {
    setFiles(list);
  };

  const onFormSubmit = () => {
    const requestData = {
      name,
      email,
      phone,
      message,
      needNda: nda,
      files,
    };
    console.log(requestData);
  };

  return (
    <Grid container className={classes.root} direction="column">
      <SectionHeader title="Let’s discuss [your ideas]" className={classes.title} />
      <form noValidate autoComplete="off" className={classes.form}>
        <Grid container spacing={4}>
          <Grid item md={6} sm={12}>
            <CodinityFormInput name="name" placeholder="Name" label="Your Name" onChange={setName} />
            <CodinityFormInput name="phone" placeholder="Your phone number" label="Phone" onChange={setPhone} />
          </Grid>
          <Grid item md={6} sm={12}>
            <CodinityFormInput name="email" placeholder="Email" label="Your Email" onChange={setEmail} />
            <FileUploading
              value={files}
              onChange={onChange}
              acceptType={['png', 'jpg', 'jpeg', 'doc', 'docx', 'pdf', 'odf']}
              maxFileSize={625000}
            >
              {({ imageList, errors, onImageUpload }) => (
                <CodinityFormInput
                  name="files"
                  placeholder="Select your files"
                  label="Attach files"
                  onClick={onImageUpload}
                  upload
                />
              )}
            </FileUploading>
          </Grid>
        </Grid>
        <Box component="div" marginTop="32px">
          <CodinityFormInput
            name="message"
            placeholder="Write your message"
            label="Message/Question"
            multiline
            rows={5}
            onChange={setMessage}
          />
        </Box>
        <Grid container alignItems="center" justify="space-between">
          <Grid item lg={8} md={12}>
            <Typography variant="body2">
              I conset to Codnity processing my personal data according to the{' '}
              <a className={classes.link} target="_blank" href="#">
                Privacy Policy.
              </a>
            </Typography>
          </Grid>
          <Grid item lg={4} md={12}>
            <Box component="div" className={classes.checkboxWrapper}>
              <FormControlLabel
                control={<CodnityCheckbox checked={nda} onChange={handleChange} name="nda" />}
                label="Get NDA"
                className={classes.noMargin}
              />
            </Box>
          </Grid>
        </Grid>
        <Box component="div" className={classes.buttonWrapper}>
          <Button className={classes.button} color="primary" onClick={onFormSubmit}>
            send message
          </Button>
        </Box>
      </form>
      <div className={classes.greenCircle} />
      <div className={classes.greenBigCircle} />
      <div className={classes.violetCircle} />
      <div className={classes.redCircle} />
    </Grid>
  );
}

export { Discuss };
