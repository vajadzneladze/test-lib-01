import styled from "styled-components";
import { StyledCheckBoxGroupProps } from "./CheckBoxGroup.types";


export const StyledCheckBoxGroup = styled.div<StyledCheckBoxGroupProps>`

    display:flex;
    gap:10px;
    flex-direction: ${({ flexDirection }) => flexDirection === 'column' ? 'column' : 'row'};
`;
