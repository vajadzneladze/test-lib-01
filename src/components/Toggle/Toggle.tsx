import React from "react";
import { StyledToggle, StyledToggleCircle } from "./StyleToggle";
import { ToggleProps } from "./Toggle.types";


const Toggle = ({ isOn = false }: ToggleProps) => {

  return (
    <StyledToggle isDay={isOn}>
      <StyledToggleCircle isDay={isOn} />
    </StyledToggle>
  );
};

export default Toggle;
