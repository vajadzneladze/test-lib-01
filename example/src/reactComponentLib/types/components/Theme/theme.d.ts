import { DefaultTheme } from "styled-components";
declare module 'styled-components' {
    interface DefaultTheme {
        body: string;
        text: string;
    }
}
export declare const lightTheme: {
    body: string;
    text: string;
};
export declare const darkTheme: {
    body: string;
    text: string;
};
export declare const GlobalStyles: import("styled-components").GlobalStyleComponent<{}, DefaultTheme>;
