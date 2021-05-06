import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

import { IconCodnity } from 'uikit/IconCodnity';

import { useStyles } from './styles';
import { CardItemProps } from './interfaces';

function CardItem({ title, subTitle, content, icon }: CardItemProps): ReactElement {
  const classes = useStyles();
  return (
    <Box
      component="div"
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      flexDirection="column"
      height="100%"
      className={classes.root}
    >
      <Box component="div" display="flex" className={classes.header}>
        <div className={classes.iconWrapper}>
          <IconCodnity name={icon} width="74px" height="54px" />
        </div>
        <Box component="div" className={classes.titleWrapper}>
          <Typography variant="subtitle2" className={classes.title}>
            <FormattedMessage id={title} />
          </Typography>
          <Typography variant="body2">
            <FormattedMessage id={subTitle} />
          </Typography>
        </Box>
      </Box>
      <Box component="div" className={classes.contentWrapper}>
        <Typography variant="body2" className={classes.content}>
          <FormattedMessage id={content} />
        </Typography>
      </Box>
    </Box>
  );
}

export { CardItem };
