import React, { ReactElement } from 'react';
import { Box, Grid } from '@material-ui/core';

import { useStyles } from './styles';
import { Header } from './Header';
import { CardItem } from './CardItem';

function ServiceCard(): ReactElement {
  const classes = useStyles();
  const column1 = [
    'Product design sprint / discovery sprint',
    'Scoping session',
    'Research & validation & feasibility',
  ];
  const column2 = [
    'UX review - An evaluation which will help you radically improve your product by eliminating all UX issues to get a truly appealing and streamlined experience that users will love.',
    'Business analysis',
  ];
  return (
    <Box component="div" className={classes.root}>
      <Box component="div" marginBottom="80px">
        <Header
          title="Ideation and evaluation"
          subTitle="The discovery phase is the key to long-term success. Together, we will define targets and your needs. The result is a clearly defined strategy."
        />
        <Grid container justify="space-between">
          <Grid item md={5} sm={12} className={classes.fullWidth}>
            {column1.map((item, i) => (
              <CardItem key={i} index={`${i + 1}`} content={item} />
            ))}
          </Grid>
          <Grid item md={5} sm={12} className={classes.fullWidth}>
            {column2.map((item, i) => (
              <CardItem key={i} index={`${i + 4}`} content={item} />
            ))}
          </Grid>
        </Grid>
      </Box>
      <Box component="div" marginBottom="80px">
        <Header
          title="Design"
          subTitle="Tell us your idea, and our designers will bring it to life. We offer you an exceptional design according to your business needs and best UX/UI practice."
        />
      </Box>
    </Box>
  );
}

export { ServiceCard };
