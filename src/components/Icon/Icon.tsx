import React from "react";
import { IconProps } from "./Icon.types";
import { IconContainer } from "./StyledIcon";
import SomeIcon from "./SomeIcon";

const Icon = ({ name = "SomeIcon", color, fontSize, ...props }: IconProps) => {
  // let IconComponent = null;

  // try {
  //   IconComponent = require(`@/components/Icon/${name}`).default;
  // } catch (error) {
  //   console.error(`Error loading icon "${name}":`, error);
  // }

  // if (!IconComponent) {
  //   return null;
  // }

  return (
    <IconContainer {...props}>
      <SomeIcon />
    </IconContainer>
  );
};

export default Icon;
