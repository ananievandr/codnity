import React, { ReactElement, useState, useCallback, useContext, useEffect } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { MenuCodnity } from 'uikit/MenuCodnity';
import { MenuItemCodnity } from 'uikit/MenuItemCodnity';
import { LocaleContext, LocaleTypes } from 'core/App/LocaleProvider/localeContext';

import { useStyles } from './styles';
import { languageList } from './constants';
import { LanguageItem } from './interfaces';

function LanguageMenu(): ReactElement {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [curLocale, setCurLocale] = useState(LocaleTypes.EN);
  const open = Boolean(anchorEl);
  const { locale, onChangeLocale } = useContext(LocaleContext);

  useEffect(() => {
    if (locale) setCurLocale(locale);
  }, [locale]);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onChange = useCallback(
    (value: LanguageItem) => {
      onChangeLocale(value.id);
      handleClose();
    },
    [onChangeLocale],
  );

  return (
    <div className={classes.root}>
      <ButtonBase
        className={classes.button}
        focusRipple
        focusVisibleClassName={classes.focusVisible}
        onClick={handleMenu}
      >
        <Typography component="span" variant="subtitle1" color="inherit" className={classes.buttonTitle}>
          {curLocale}
          <span className={classes.buttonMarked} />
        </Typography>
        {open ? <ExpandLess className={classes.icon} /> : <ExpandMore className={classes.icon} />}
      </ButtonBase>
      <MenuCodnity anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
        {languageList.map(item => (
          <MenuItemCodnity key={item.id} onClick={() => onChange(item)}>
            {item.title}
          </MenuItemCodnity>
        ))}
      </MenuCodnity>
    </div>
  );
}

export { LanguageMenu };
