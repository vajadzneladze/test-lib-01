import { createGlobalStyle} from "styled-components";

declare module 'styled-components' {

    export interface DefaultTheme {
        body: string
        text: string
    }
}

export const lightTheme = {
    body: '#fbfbfb',
    text: 'red',
}

export const darkTheme = {
    body: '#333333',
    text: 'green'
}

export const GlobalStyles = createGlobalStyle`
`;


