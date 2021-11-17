import React, { ReactElement, useCallback } from 'react';
import { FormControl } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
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
  onBlur,
  onChange,
  upload,
  value,
  errorMessage,
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

  const handleBlur = useCallback(
    (event: any) => {
      if (onBlur) {
        onBlur(event.target.value);
      }
    },
    [onBlur],
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
        value={value}
        onBlur={handleBlur}
        aria-describedby="component-error-text"
      />
      <FormHelperText className={classes.error} id="component-error-text">
        {errorMessage}
      </FormHelperText>
    </FormControl>
  );
}

export { CodinityFormInput };
