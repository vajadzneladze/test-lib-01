/// <reference types="react" />
export interface ThemeProviderProps {
    variant: 'dark' | 'light';
    children: any;
}
declare const ThemeProviderWrapper: ({ variant, children }: ThemeProviderProps) => JSX.Element;
export default ThemeProviderWrapper;
