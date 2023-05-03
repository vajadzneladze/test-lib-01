import styled from "styled-components";


export const StyledSettings = styled.dialog`

    border:0px;
    background-color: ${({ theme }) => theme.color.steel.grey_21};
    border-radius: ${({ theme }) => theme.size.radius.large};
    padding:9px;
    width:124px;
    box-shadow: 0px 0px 2px 1px #D3D3D3;
`;

export const StyledSettingsActionsWrapper = styled.div`
  
`;


export const StyledSettingsAction = styled.div`
    display:flex;
    height:36px;
    position:relative;
    overflow:hidden;
    cursor:pointer;
    justify-content: start;
    align-items: center; 
    gap:9px; 

    p {
        transform:translateY(-2px);
        font-family: ${({ theme }) => theme.typography.font.regular};
        font-size: ${({ theme }) => theme.typography.fontSize.fs_12};
        line-height: ${({ theme }) => theme.typography.lineHeight.md};
        color: ${({ theme }) => theme.mode !== 'day' ? '#6F787B' : '#FFFFFF'};
    }



    &.delete {

        p {
            color: ${({ theme }) => theme.color.semantic.negative_100};
        }


        svg {
            path {

                stroke: ${({ theme }) => theme.color.semantic.negative_100};
            }
        }
    }
`;