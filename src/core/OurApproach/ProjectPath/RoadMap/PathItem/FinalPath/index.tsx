import React, { ReactElement } from 'react';
import { IconCodnity } from 'uikit/IconCodnity';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FormattedMessage } from 'react-intl';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { PathItemProps } from '../interfaces';
import { useStyles } from '../styles';

function FinalPath({ icon, title }: PathItemProps): ReactElement {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box component="div" display="flex" className={classes.card7} style={{ position: 'relative' }}>
      <div className={clsx(classes.root, classes.centerContent)}>
        <div className={classes.iconWrapper}>
          <IconCodnity name={icon} width="100%" height="100%" />
        </div>
        <Typography variant="h6" className={clsx(classes.title, classes.finalTitle)}>
          <FormattedMessage id={title} />
        </Typography>
      </div>
      <div className={classes.arrow7}>
        <IconCodnity name={`path:road1${isTablet ? '-sm' : ''}`} useOwnSize />
      </div>
    </Box>
  );
}

export { FinalPath };
