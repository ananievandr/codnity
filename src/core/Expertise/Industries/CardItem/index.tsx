import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { Box, Typography } from '@material-ui/core';

import { IconCodnity } from 'uikit/IconCodnity';

import { CardItemProps } from './interfaces';
import { useStyles } from './styles';

function CardItem({ title, contentItems, icon }: CardItemProps): ReactElement {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.root}>
      <div className={classes.iconWrapper}>
        <IconCodnity name={icon} width="100%" height="100%" />
      </div>
      <Box component="div">
        <Box component="div" className={classes.header}>
          <Typography variant="h6" className={classes.title}>
            <FormattedMessage id={title} />
          </Typography>
        </Box>
        <Box component="div" marginLeft="15px">
          {contentItems.map((item, i) => (
            <Typography key={i} variant="body2" className={classes.contentItem}>
              <FormattedMessage id={item} />
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export { CardItem };
