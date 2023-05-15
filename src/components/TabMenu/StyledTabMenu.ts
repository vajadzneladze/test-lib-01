import styled from "styled-components";
import Text from "../Text/Text";

export const StyledTabMenu = styled.div`
    display:flex;
    background-color: ${({ theme  }) => theme.color.steel.grey_00};
    background:lightcoral;
    height:72px;
`;

export const StyledTabMenuItems = styled<any>(Text)`
    
    border-bottom:2px  solid ${({ theme  }) => theme.color.text.primary}

`;