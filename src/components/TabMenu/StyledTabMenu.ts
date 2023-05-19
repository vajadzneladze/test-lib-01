import styled from "styled-components";
import Text from "../Text/Text";

export const StyledTabMenu = styled.div<any>`
    display:flex;
    flex-wrap: wrap;
    flex-direction: ${({ flexDir }) => flexDir === 'column' ? 'column' : 'row'};
    /* background-color: ${({ theme }) => theme.color.steel.grey_00}; */
    gap:32px;
    /* background:red; */
    /* padding:24px 36px 0px 36px; */
    /* height:72px; */
    box-sizing: border-box;
`;

export const StyledTabMenuItems = styled.div<any>`
    border-bottom:2px  solid ${({ theme, isActive }) => isActive === true ? theme.color.text.primary : 'transparent'};
    color:${({ theme, isActive }) => isActive ? theme.color.text.primary : theme.color.text.tertiary};
    padding-bottom: 2px;
    height:fit-content;
    width:fit-content;
    cursor:pointer;
    box-sizing: border-box;
    transition:200ms;
    

    &:hover {
        color:${({ theme, isActive }) => isActive ? theme.color.text.primary : theme.color.text.secondary};
        border-bottom:2px  solid ${({ theme, isActive }) => isActive === true ? theme.color.text.primary : theme.color.steel.grey_06};
    }
`;