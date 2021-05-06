import React, { ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';

import { SectionHeaderProps } from './interfaces';
import { useStyles } from './styles';

function SectionHeader({ title, className }: SectionHeaderProps): ReactElement {
  const classes = useStyles();
  const parsedValue = title.replaceAll('[', `<span class=${classes.underline}>`).replaceAll(']', '</span>');
  return (
    <Typography variant="h1" className={className}>
      <span dangerouslySetInnerHTML={{ __html: parsedValue }} />
    </Typography>
  );
}

export { SectionHeader };
