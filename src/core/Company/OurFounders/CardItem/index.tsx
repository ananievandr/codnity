import React, { ReactElement } from 'react';
import clsx from 'clsx';

import { useStyles } from './styles';
import { FounderCardProps } from './interfaces';
import { FormattedMessage } from 'react-intl';
import { Box, Grid, Typography } from '@material-ui/core';
import { IconCodnity } from 'uikit/IconCodnity';

function CardItem({ title, content, imageSrc, link }: FounderCardProps): ReactElement {
  const classes = useStyles();
  return (
    <Box display="flex" className={classes.root} flexDirection="column" justifyContent="space-between">
      <Grid container>
        <Grid item lg={12} md={4} sm={12} xs={12}>
          <Box component="div">
            <img src={imageSrc} alt="founders" />
          </Box>
          <Typography variant="subtitle2" className={classes.title}>
            <FormattedMessage id={title} />
          </Typography>
        </Grid>
        <Grid item lg={12} md={8} sm={12} xs={12}>
          <Typography variant="body2" className={classes.content}>
            <FormattedMessage id={content} />
          </Typography>
        </Grid>
      </Grid>
      <a href={link} target="_blank" className={classes.link} rel="noreferrer">
        <Box component="div" display="flex" justifyContent="flex-end">
          <Typography variant="body2" className={clsx(classes.content, classes.linkContent)}>
            <FormattedMessage id="company.ourFounders.card.link" />
          </Typography>
          <IconCodnity name="violet:nav-arrow" />
        </Box>
      </a>
    </Box>
  );
}

export { CardItem };
