import React, { ReactElement } from 'react';

import { IconSizes } from './constants';
import { IconProps } from './interfaces';
import { mapPropsToIcons } from './utils/mapPropsToIcons';

function Icon({ name, size = IconSizes.sm24, height, width, onClick, className, id }: IconProps): ReactElement {
  const svgName = name;

  const TagName = mapPropsToIcons[svgName];
  const TagStyle = {
    width: width || `${size}px`,
    height: height || `${size}px`,
  };

  return <TagName id={id} style={TagStyle} onClick={onClick} className={className} />;
}

export { Icon };
