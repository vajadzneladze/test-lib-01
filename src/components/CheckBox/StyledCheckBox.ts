import styled from "styled-components";
import {  StyledCheckBoxProps } from "./CheckBox.types";

export const StyledCheckBox = styled.div<StyledCheckBoxProps>`
    display:flex;
    gap:10px;
    align-items: center;
    flex-direction: ${({ flexDirection }) => flexDirection !== 'left' ? 'row' : 'row-reverse'};
    color: ${({ theme }) => theme.color.text.primary}
`;