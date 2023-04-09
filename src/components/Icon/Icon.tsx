import React, { Suspense, lazy } from "react";
import { IconProps } from "./Icon.types";
import { IconContainer } from "./StyledIcon";
import * as Icons from "../Icons";

type IconComponents = Record<string, React.ComponentType<IconProps>>;

const iconComponents: IconComponents = Icons;

const Icon = ({ name, color, size, ...props }: IconProps) => {
  // let IconComponent = null;

  // try {
  //   // IconComponent = require(`../Icons/${name}`).default;
  //   IconComponent = lazy(() => import(`../Icons/${name}`));

  // } catch (error) {
  //   console.error(error);
  // }

  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconContainer size={size} color={color} {...props}>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <IconComponent name = {name}/>
      {/* </Suspense> */}
    </IconContainer>
  );
};

export default Icon;
