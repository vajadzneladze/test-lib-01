import React from "react";
import { IconProps } from "./Icon.types";
import { IconContainer } from "./StyledIcon";
import SomeIcon from "./SomeIcon";

const Icon = ({ name = "", color, fontSize, ...props }: IconProps) => {
  let IconComponent = null;

  try {
    IconComponent = require(`../Icons/${name}`).default;
  } catch (error) {
    console.error(`Error loading icon "${name}":`, error);
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
