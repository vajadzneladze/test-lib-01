import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { ThemeProvider as StyledComponetsThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "./theme";
import { ThemeProviderProps } from "./ThemeProvider.types";
import { CustomToastContainer } from "./StyleCustomToastContainer";

const defaultProps: ThemeProviderProps = {
    variant: 'light'
}


const ThemeProvider: React.FC<ThemeProviderProps> = ({ variant, children }) => {

    return <StyledComponetsThemeProvider theme={variant !== 'dark' ? lightTheme : darkTheme}>
        <GlobalStyles />

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
