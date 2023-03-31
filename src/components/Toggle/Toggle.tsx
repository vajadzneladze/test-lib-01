import React from "react";
import { StyledToggle, StyledToggleCircle } from "./StyleToggle";
import { ToggleProps } from "./Toggle.types";


const Toggle = ({ isOn = false, ...props }: ToggleProps) => {

  return (
    <StyledToggle isDay={isOn} {...props}>
      <StyledToggleCircle isDay={isOn}/>
    </StyledToggle>
  );
};

export default Toggle;
