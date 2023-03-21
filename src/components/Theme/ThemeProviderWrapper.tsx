import { ThemeProvider } from "styled-components";

import { lightTheme , darkTheme, GlobalStyles } from "./theme";
import React ,  { useState } from "react";

export interface ThemeProviderProps  {

    variant: 'dark' | 'light',
    children : any
}

const ThemeProviderWrapper = ({ variant, children } : ThemeProviderProps) => {


    return <ThemeProvider theme = { variant !== 'dark' ? lightTheme :  darkTheme }>
        
        <GlobalStyles />    

        { children }

    </ThemeProvider>
}

export default ThemeProviderWrapper;