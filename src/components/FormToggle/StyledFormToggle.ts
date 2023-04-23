import styled from "styled-components";
import { StyledFormToggleProps } from "./FormToggleTypes";

export const FormToggleWrapper = styled.div<StyledFormToggleProps>`
  width: ${({ theme, withIcon }) => (withIcon ? "52px" : "34px")};
  height: ${({ theme, withIcon }) => (withIcon ? "32px" : "22px")};

  ${({ theme, disabled, withIcon, isActive }) =>
    disabled
      ? ` background-color: ${
          isActive
            ? withIcon
              ? "#D3C8FF"
              : theme.color.semantic.positive_40
            : withIcon
            ? "#E9EBEC"
            : theme.color.steel.grey_05
        }  `
      : ` background-color: ${
          isActive
            ? withIcon
              ? "#283593"
              : theme.color.semantic.positive_120
            : withIcon
            ? "#FFC757"
            : theme.color.steel.grey_09
        };

        cursor: pointer;

        &:hover {
            background-color: ${
              isActive
                ? withIcon
                  ? "#7F7AE4"
                  : theme.color.semantic.positive_100
                : withIcon
                ? "#FBC14D"
                : theme.color.steel.grey_08
            };
          }
        
        
        
        
        `};

  border-radius: 150px;
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 2px;
  transition: 200ms ease;
`;

export const FormToggleCircle = styled.div<StyledFormToggleProps>`
  width: ${({  withIcon }) => (withIcon ? "28px" : "18px")};
  height: ${({  withIcon }) => (withIcon ? "28px" : "18px")};
  border-radius: 100%;
  background-color: ${({ disabled }) => (disabled ? "#F9FAFA" : "white")};
  position: relative;
  transition: 200ms ease;
  display: flex;
  align-items: center;

  transform: translateX(
    ${({ isActive, withIcon }) =>
      !isActive ? `0px` : withIcon ? "20px" : `12px`}
  );

  ${({ theme, disabled, isActive, withIcon }) =>
    disabled
      ? `
      
      svg {
        path {
          transition: 200ms ease;
          fill: ${ isActive ? '#D3C8FF' :  '#231F20'};
        }
      }
      
      `
      : `
  
  &:hover {
    path {
      fill: ${
        isActive
          ? withIcon
            ? "#7F7AE4"
            : theme.color.semantic.positive_100
          : ""
      };
    }
  }

  svg {
    path {
      transition: 200ms ease;
      fill: ${
        isActive
          ? withIcon
            ? "#283593"
            : theme.color.semantic.positive_120
          : "#6f787b"
      };
    }
  }
  
  `}
`;
