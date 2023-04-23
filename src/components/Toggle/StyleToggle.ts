import styled from "styled-components";
import sun from "../../assets/icons/sun-toggle.svg";
import moon from "../../assets/icons/moon-toggle.svg";
import { StyledToggleProps } from "./Toggle.types";

export const StyledToggle = styled.div<StyledToggleProps>`
  width: 50px;
  height: 24px;
  border-radius: ${({ theme }) => theme.size.radius.circle};
  background-color: ${({ isDay }) => (isDay ? "#FFC757" : "white")};
  transition: 500ms;
  box-sizing: border-box;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &::before {
    content: "";
    float: left;
    padding-left: 6px;
    background: url(${sun as any}) no-repeat center center;
    background-size: 15px;
    background-size: 15px;
    display: block;
    width: 100%;
    height: 100%;
  }

  &::after {
    content: "";
    float: right;
    padding-right: 6px;
    background-size: 15px;
    display: block;
    background: url(${moon as any }) no-repeat center center;
    background-size: 15px;
    width: 100%;
    height: 100%;
  }
`;

export const StyledToggleCircle = styled.div<{ isDay: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${({ isDay }) => (isDay ? "white" : "#283593")};
  position: absolute;
  transition: 500ms;
  transform: translateX(${({ isDay }) => (!isDay ? `2px` : `27px`)});
`;
