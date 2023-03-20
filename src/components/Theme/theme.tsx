import { createGlobalStyle , DefaultTheme } from "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        body : string
        text : string
    }
  }
  


export const GlobalStyles = createGlobalStyle`

    body {
        background: ${ ({ theme }) => theme.body },
        color: ${ ({ theme })=> theme.text },
    }
`;


export const lightTheme  = {
    body: '#fbfbfb',
    text: '#red'
}

export const darkTheme = {
    body: '#333333',
    text: 'green'
}