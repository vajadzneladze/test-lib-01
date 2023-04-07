import React from "react";
import { StyledIcon } from "./StyledIcon";
import { IconProps } from "./Icon.types";
import styled from "styled-components";
import SomeIcon from "./SomeIcon";
// import sun from '../../assets/sun.svg';

const IconContainer = styled.div`
  svg {
    width: 16px;
    height: 16px;

    path {
      fill: red;
    }
  }
`;

const Icon = ({ name = "SomeIcon", fontSize, ...props }: IconProps) => {
  let IconComponent = null;

  try {
    IconComponent = require(`../Icon/${name}`).default;
  } catch (error) {
    // console.error(`Error loading icon "${name}":`, error);
  }

  if (!IconComponent) {
    return null;
  }

  return (
    <IconContainer {...props}>
      <IconComponent />
    </IconContainer>
  );
};

export default Icon;
