import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { Box, Typography } from '@material-ui/core';

import { CardItemProps } from './interfaces';
import { useStyles } from './styles';

function CardItem({ index, content }: CardItemProps): ReactElement {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.root}>
      <Typography variant="body2" className={classes.content}>
        <FormattedMessage id={content} />
      </Typography>
      <Box component="div" className={classes.index}>
        <span className={classes.number}>{index}</span>
      </Box>
    </Box>
  );
}

export { CardItem };
