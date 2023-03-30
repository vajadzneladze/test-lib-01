import React from "react";
import { StyledToggle, StyledToggleCircle } from "./StyleToggle";
import { ToggleProps } from "./Toggle.types";

const Toggle = ({ isOn = false, onClick }: ToggleProps) => {
  return (
    <StyledToggle isDay={isOn} onClick={onClick}>
      <StyledToggleCircle isDay={isOn} />
    </StyledToggle>
  );
};

export default Toggle;
