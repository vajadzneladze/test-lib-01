import React from 'react';
import { StyledIcon } from "./StyledIcon";
import { IconProps } from './Icon.types';
// import sun from '../../assets/sun.svg';

const Icon = ({ name, ...props }: IconProps) => {

    // const IconComponent = require(`../../assets/${name || 'moon'}.svg`).default ;

    return <StyledIcon {...props} />;
}

export default Icon;