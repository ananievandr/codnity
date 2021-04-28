import React, { ReactElement } from 'react';

import { Box, Typography } from '@material-ui/core';

import { IconCodnity } from 'uikit/IconCodnity';
import { IconSizes } from 'uikit/IconCodnity/constants';

import { CardItemProps } from './interfaces';
import { useStyles } from './styles';

function CardItem({ title, icon }: CardItemProps): ReactElement {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.root}>
      <Box component="div">
        <IconCodnity name={icon} size={IconSizes.md32} />
      </Box>
      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
    </Box>
  );
}

export { CardItem };
