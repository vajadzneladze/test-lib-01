import React from "react";
import styled, { ThemeProvider as StyledComponetsThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "./theme";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export interface ThemeProviderProps {
    variant?: 'dark' | 'light',
    children?: React.ReactNode

}

const defaultProps: ThemeProviderProps = {
    variant: 'light'
}

const CustomToastContainer = styled.div`
    

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
                            font-family: ${({ theme }) => theme.typography.fontFamily};
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
            font-family: ${ ({ theme  }) => theme.typography.fontFamily} 
        }
    }



`;


const ThemeProvider: React.FC<ThemeProviderProps> = ({ variant, children }) => {

    return <StyledComponetsThemeProvider theme={variant !== 'dark' ? lightTheme : darkTheme}>
        <GlobalStyles />
        {/* <ToastContainer /> */}

        <CustomToastContainer >
            <ToastContainer
                position="bottom-left"
                autoClose={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="colored"
            />
        </CustomToastContainer>


        {children}

    </StyledComponetsThemeProvider>
}

ThemeProvider.defaultProps = defaultProps;

export default ThemeProvider;
