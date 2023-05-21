import styled from "styled-components";
import { StyledRadioProps } from "./Radio.types";

export const StyledRadio = styled.div<StyledRadioProps>`
    .dx-radiogroup {
        .dx-collection {
            flex-direction: ${({ flexDirection }) => flexDirection};
        }
    }
`;