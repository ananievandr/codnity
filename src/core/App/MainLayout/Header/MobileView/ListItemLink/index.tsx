import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { Omit } from '@material-ui/types';

import { ListItemLinkProps } from './interfaces';
import { ListItemStyled, ListItemTextStyled } from './styles';

function ListItemLink({ title, to, className }: ListItemLinkProps): ReactElement {
  const renderLink = React.useMemo(() => {
    const element = React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
      <RouterLink to={to} ref={ref} {...itemProps} />
    ));
    element.displayName = 'RouterLink';
    return element;
  }, [to]);

  return (
    <li className={className}>
      <ListItemStyled button component={renderLink}>
        <ListItemTextStyled primary={<FormattedMessage id={title} />} disableTypography />
      </ListItemStyled>
    </li>
  );
}

export { ListItemLink };
