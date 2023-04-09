import styled from "styled-components";
import { IconProps } from "./Icon.types";


export const getSize = (size: IconProps["size"]) => {
  switch (size) {
    case "xs":
      return "16px";
    case "sm":
      return "18px";
    case "md":
      return "20px";
    case "lg":
      return "24px";
    default:
      return "16px";
  }
};


export const IconContainer = styled.div<{ size: IconProps['size']}>`
  
  svg {
    width: ${({ size }) => getSize(size)};
    height: ${({ size }) => getSize(size)};

    path {
      fill: ${ ({ color , theme }) => color  || theme.color.steel.gery_13 };
    }
  }
`;