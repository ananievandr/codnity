import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Box, Grid, Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import { IconCodnity } from 'uikit/IconCodnity';
import { IconSizes } from 'uikit/IconCodnity/constants';
import { SectionHeader } from 'uikit/SectionHeader';

import { useStyles } from './styles';
import { statList } from './constants';

function Stats(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="column">
      <SectionHeader title="main.stats.header" />
      <Box component="div" width="100%" className={classes.border}>
        <Grid container justify="center">
          {statList.map((item, i) => (
            <Grid item md={4} sm={12} key={i}>
              <Box
                component="div"
                display="flex"
                justifyContent="center"
                className={clsx({ [classes.separator]: i + 1 !== statList.length })}
              >
                <Box component="div" className={classes.contentCenter}>
                  <Box component="div" display="flex" alignItems="center" marginBottom="16px">
                    <Box component="div" marginRight="20px" display="flex" alignItems="center">
                      <IconCodnity name={item.icon} size={IconSizes.lg40} />
                    </Box>
                    <div className={classes.projectCount}>{`${item.value}.`}</div>
                  </Box>
                  <Box component="div" display="flex" flexDirection="column" marginLeft="60px" maxWidth="165px">
                    <Typography variant="body2">
                      <FormattedMessage id={item.content} />
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
}

export { Stats };
