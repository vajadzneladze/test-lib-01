import styled from "styled-components";


export const IconContainer = styled.div`
  svg {
    width: 16px;
    height: 16px;

    path {
      fill: ${ ({ color , theme }) => color  || theme.color.steel.gery_13 };
    }
  }
`;