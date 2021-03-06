import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

import { IconCodnity } from 'uikit/IconCodnity';
import { IconSizes } from 'uikit/IconCodnity/constants';

import { useStyles } from './styles';
import { CardValueProps } from './interfaces';

function CardItem({ title, content, icon }: CardValueProps): ReactElement {
  const classes = useStyles();
  return (
    <Box
      component="div"
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      borderRadius="30px"
      height="100%"
      className={classes.root}
    >
      <Box component="div">
        <div className={classes.iconWrapper}>
          <IconCodnity name={icon} size={IconSizes.lg40} />
        </div>
        <Typography variant="subtitle2" className={classes.title}>
          <FormattedMessage id={title} />
        </Typography>
        <Typography variant="body2" className={classes.content}>
          <FormattedMessage id={content} />
        </Typography>
      </Box>
      <Box component="div" display="flex" justifyContent="flex-start" className={classes.link}>
        <Typography variant="body2" className={clsx(classes.content, classes.linkContent)}>
          <FormattedMessage id="main.services.card.link" />
        </Typography>
        <IconCodnity name="violet:nav-arrow" className={classes.linkIcon} />
      </Box>
    </Box>
  );
}

export { CardItem };
