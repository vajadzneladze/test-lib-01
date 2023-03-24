import React from "react";
import { ThemeProvider as StyledComponetsThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "./theme";

export interface ThemeProviderProps {
    variant?: 'dark' | 'light',
    children?: React.ReactNode

}

const defaultProps: ThemeProviderProps = {
    variant: 'light'
}


const ThemeProvider: React.FC<ThemeProviderProps> = ({ variant, children }) => {

    return <StyledComponetsThemeProvider theme={variant === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        {children}

    </StyledComponetsThemeProvider>
}

ThemeProvider.defaultProps = defaultProps;

export default ThemeProvider;
