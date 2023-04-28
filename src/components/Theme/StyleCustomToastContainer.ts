import styled from "styled-components";

export const CustomToastContainer = styled.div`

    .Toastify__toast {

        --toastify-color-light: #fff;
        --toastify-color-dark: #121212;
        --toastify-color-info: #3140B3;
        --toastify-color-success: #10B77F;
        --toastify-color-warning: #EEC64F;
        --toastify-color-error: #EF4343;
        --toastify-toast-min-height: 48px;

        box-shadow: 0px 8px 10px 1px rgba(0, 0, 0, 0.03), 0px 3px 14px 2px rgba(0, 0, 0, 0.07), 0px 5px 5px -3px rgba(0, 0, 0, 0.06);
        border-radius:10px;
        width:328px;
        gap:12px;
        padding-left:24px;
        padding-right:16px;
        box-sizing:border-box;

        .Toastify__toast-icon {
            display:none;
        }

        .Toastify__toast-body {
            padding:0px;

            & > {
                    div {
                        &:last-child {

                            font-size: ${({ theme }) => theme.typography.fontSize.fs_12};
                            font-family: ${({ theme }) => theme.typography.font.helvetica_regular};
                            line-height: ${({ theme }) => theme.typography.lineHeight.sm};
                            font-weight: ${({ theme }) => theme.typography.fontWeight.regular}
                        }
                    }
            }
        }

        /** action button for toast notification */
        .action-button {
  
            font-size:${({ theme }) => theme.typography.fontSize.fs_12};
            line-height: ${({ theme }) => theme.typography.lineHeight.md};
            font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
            font-family: ${({ theme }) => theme.typography.fontFamily} 
        }
    }

`;
