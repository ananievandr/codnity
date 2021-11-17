import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { IconCodnity } from 'uikit/IconCodnity';
import { SectionHeader } from 'uikit/SectionHeader';

import { useStyles } from './styles';
import { FeedbackProps } from './interfaces';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function FeedbackModal({ open, onClose }: FeedbackProps): ReactElement {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={onClose} maxWidth="md" onBackdropClick={onClose}>
      <DialogContent>
        <div className={classes.root}>
          <div className={classes.icon}>
            <IconCodnity name="ic-success" width="100%" height="100%" />
          </div>
          <SectionHeader title="feedbackModal.header" />
          <Typography variant="body2" className={classes.paragraph}>
            <FormattedMessage id="feedbackModal.subHeader" />
          </Typography>
          <Typography variant="body2">
            <FormattedMessage id="feedbackModal.body1" />
          </Typography>
          <Box component="div" className={classes.buttonWrapper}>
            <Button className={classes.button} color="primary" onClick={onClose}>
              <FormattedMessage id="feedbackModal.button" />
            </Button>
          </Box>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default FeedbackModal;
