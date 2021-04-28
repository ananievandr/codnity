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
      height="100%"
      className={classes.root}
    >
      <div className={classes.iconWrapper}>
        <IconCodnity name={icon} width="74px" height="54px" />
      </div>
      <Box component="div" display="flex" flexDirection="column" marginLeft="32px">
        <Box component="div" marginBottom="24px">
          <Typography variant="subtitle2" className={classes.title}>
            <FormattedMessage id={title} />
          </Typography>
          <Typography variant="body2">
            <FormattedMessage id={subTitle} />
          </Typography>
        </Box>
        <Typography variant="body2" className={classes.content}>
          <FormattedMessage id={content} />
        </Typography>
      </Box>
    </Box>
  );
}

export { CardItem };
