import React, { ReactElement } from 'react';

import { IconSizes } from './constants';
import { mapPropsToIcons } from './utils/mapPropsToIcons';
import { IconProps } from './interfaces';

/** по умолчанию иконка приложения сбера */
const defaultName = 'ic-empty';

function IconCodnity({ name, size = IconSizes.sm24, height, width, className }: IconProps): ReactElement {
  const IconComponent = mapPropsToIcons[name || defaultName];
  const componentStyles = {
    width: width || `${size}px`,
    height: height || `${size}px`,
  };
  return <IconComponent style={componentStyles} className={className} />;
}

export { IconCodnity };
