import React from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

interface Props extends SwitchProps {
  classes: Styles;
}

const CodnitySwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 404,
      height: 56,
      padding: 0,
      margin: 0,
      [theme.breakpoints.down('sm')]: {
        width: 242,
        height: 36,
      },
    },
    switchBase: {
      borderRadius: 5,
      padding: 1,
      '&$checked': {
        transform: 'translateX(202px)',
        [theme.breakpoints.down('sm')]: {
          transform: 'translateX(121px)',
        },
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: 'rgba(91, 57, 155, 0.2)',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 202,
      height: 54,
      [theme.breakpoints.down('sm')]: {
        width: 121,
        height: 34,
      },
      borderRadius: 5,
      color: 'rgba(91, 57, 155, 0.3)',
      boxShadow: 'none',
    },
    track: {
      borderRadius: 5,
      border: 'none',
      backgroundColor: 'rgba(91, 57, 155, 0.2)',
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    iconButton: {
      borderRadius: 5,
    },
    checked: {},
    focusVisible: {},
  }),
)(({ classes, ...props }: Props) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export { CodnitySwitch };
