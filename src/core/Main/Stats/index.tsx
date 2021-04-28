import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Box, Grid, Typography } from '@material-ui/core';

import { useStyles } from './styles';
import { IconCodnity } from 'uikit/IconCodnity';
import { IconSizes } from 'uikit/IconCodnity/constants';

function Stats(): ReactElement {
  const classes = useStyles();
  const array = [
    {
      content: 'Projects for startups',
      value: '95',
      icon: 'dev:startup',
    },
    {
      content: 'Projects for small businesses',
      value: '18',
      icon: 'dev:briefcase',
    },
    {
      content: 'Projects for medium-sized enterprises',
      value: '9',
      icon: 'dev:office-building',
    },
  ];
  return (
    <Grid container className={classes.root} direction="column">
      <Typography variant="h1">We’re excited about building the future</Typography>
      <Box component="div" width="100%" className={classes.border}>
        <Grid container justify="center">
          {array.map((item, i) => (
            <Grid item md={4} sm={4} xs={12} key={i}>
              <Box
                component="div"
                display="flex"
                justifyContent="center"
                className={clsx({ [classes.separator]: i + 1 !== array.length })}
              >
                <Box component="div" className={classes.contentCenter}>
                  <Box component="div" display="flex" alignItems="center" marginBottom="16px">
                    <Box component="div" marginRight="20px" display="flex" alignItems="center">
                      <IconCodnity name={item.icon} size={IconSizes.lg40} />
                    </Box>
                    <div className={classes.projectCount}>{`${item.value}.`}</div>
                  </Box>
                  <Box component="div" display="flex" flexDirection="column" marginLeft="60px" maxWidth="165px">
                    <Typography variant="body2">{item.content}</Typography>
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
