import React, { ReactElement, useCallback } from 'react';
import { FormControl } from '@material-ui/core';
import clsx from 'clsx';

import { IconCodnity } from 'uikit/IconCodnity';

import { useStyles, CodnityInput, CodnityLabel, InputAdornmentStyled } from './styles';
import { CodinityFormInputProps } from './interfaces';
import { IconSizes } from 'uikit/IconCodnity/constants';

function CodinityFormInput({
  name,
  label,
  placeholder,
  multiline,
  rows,
  onClick,
  onChange,
  upload,
}: CodinityFormInputProps): ReactElement {
  const classes = useStyles();

  const renderIconUpload = (): ReactElement => {
    if (upload) {
      return (
        <InputAdornmentStyled position="end">
          <IconCodnity name="violet:attachment" size={IconSizes.xs20} />
        </InputAdornmentStyled>
      );
    }
    return <></>;
  };

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event.target.value);
      }
    },
    [onChange],
  );

  return (
    <FormControl className={classes.input}>
      <CodnityLabel shrink htmlFor={name} focused={false}>
        {label}
      </CodnityLabel>
      <CodnityInput
        placeholder={placeholder}
        id={name}
        name={name}
        multiline={multiline}
        rows={rows}
        onClick={onClick}
        readOnly={upload}
        className={clsx({ [classes.upload]: upload }, { [classes.focused]: !upload })}
        endAdornment={renderIconUpload()}
        onChange={handleChange}
      />
    </FormControl>
  );
}

export { CodinityFormInput };
