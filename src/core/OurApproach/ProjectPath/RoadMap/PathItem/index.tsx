import React, { ReactElement } from 'react';
import { IconCodnity } from 'uikit/IconCodnity';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FormattedMessage } from 'react-intl';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { PathItemProps } from './interfaces';
import { useStyles } from './styles';
import { FinalPath } from './FinalPath';

function PathItem({ icon, title, items = [], isLast, index = 0 }: PathItemProps): ReactElement {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isLast) {
    return <FinalPath icon={icon} title={title} />;
  }

  return (
    <Box component="div" display="flex" className={classes[`card${index + 1}`]} style={{ position: 'relative' }}>
      <div className={classes.root}>
        <div className={classes.iconWrapper}>
          <IconCodnity name={icon} width="100%" height="100%" />
        </div>
        <Typography variant="h6" className={classes.title}>
          <FormattedMessage id={title} />
        </Typography>
        <ul className={classes.enums}>
          {items.map((text, i) => (
            <li key={i} className={classes.rowItem}>
              <span className={classes.plainText}>
                <FormattedMessage id={text} />
              </span>
            </li>
          ))}
        </ul>
      </div>

      {index === 0 && (
        <div className={classes.arrow1}>
          <IconCodnity name={`path:road1${isTablet ? '-sm' : ''}`} useOwnSize />
        </div>
      )}
      {index === 1 && (
        <div className={classes.arrow2}>
          <IconCodnity name={`path:road1${isTablet ? '-sm' : ''}`} useOwnSize />
        </div>
      )}
      {index === 2 && (
        <div className={classes.arrow3}>
          <IconCodnity name="path:road1-sm" useOwnSize />
        </div>
      )}
      {index === 3 && (
        <div className={classes.arrow4}>
          <IconCodnity name={`path:road1${isTablet ? '-sm' : ''}`} useOwnSize />
        </div>
      )}
      {index === 4 && (
        <div className={classes.arrow5}>
          <IconCodnity name={isMobile ? 'path:road1-sm' : isTablet ? 'path:road4-sm' : 'path:road4'} useOwnSize />
        </div>
      )}
      {index === 5 && (
        <div className={classes.arrow6}>
          <IconCodnity name={isMobile ? 'path:road1-sm' : isTablet ? 'path:road5-sm' : 'path:road5'} useOwnSize />
        </div>
      )}
    </Box>
  );
}

export { PathItem };
