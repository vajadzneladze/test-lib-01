import { createGlobalStyle, DefaultTheme } from "styled-components"


declare module 'styled-components' {

    export interface DefaultTheme {
        typography: any,
        size: any,
        color: any
    }
}


const typography = {
    fontFamily: 'Helvetica Neue',
    fontWeight: {
        ultraLight: '100',
        thin: '200 ',
        light: '300',
        regular: '400',
        medium: '500',
        bold: '700'
    },
    fontSize: [
        '10px',
        '12px',
        '14px',
        '16px',
        '18px',
        '24px',
        '28px',
        '32px',
        '36px',
        '44px',
        '48px',
        '56px'
    ],
    lineHeight: {
        sm: '1.5',
        md: '1.7',
        lg: '2'

    }
}

const size = {
    spacing: {
        s_1: '4px',
        s_2: '8px',
        s_3: '12px',
        s_4: '16px',
        s_5: '24px',
        s_6: '32px',
        s_7: '40px',
        s_8: '48px',
        s_9: '56px',
        s_10: '64px',
        s_11: '72px',
        s_12: '80px',
        s_13: '96px',
        s_14: '120px',
        s_15: '160px',
        s_16: '200px',
        s_17: '240px',
    },
    radius: {
        small: '2px',
        medium: '4px',
        large: '6px',
        circle: '1000px'
    }
}


export const lightTheme = {
    typography,
    size,
    color: {
        steel: {
            grey_00: '#FFFFFF',
            grey_005: '#F9FAFA',
            grey_01: '#F9FAFA',
            grey_02: '#F6F8F8',
            grey_03: '#F3F5F6',
            grey_04: '#EEF1F1',
            grey_05: '#E9EBEC',
            grey_06: '#E1E4E5',
            grey_07: '#D1D5D6',
            grey_08: '#BCC1C2',
            grey_09: '#A5AAAC',
            grey_10: '#899194',
            grey_11: '#6F787B',
            grey_12: '#555F62',
            grey_13: '#424A4D',
            grey_14: '#31383A',
            grey_15: '#2A3032',
            grey_16: '#23282A',
            grey_17: '#1E2224',
            grey_18: '#1A1E1F',
            grey_19: '#171B1C',
            grey_20: '#141719',
            grey_21: '#0F1215',
        },
        semantic: {
            positive_05: '#EDF8F4',
            positive_10: '#E2F4EE',
            positive_20: '#C9EEE2',
            positive_40: '#9DE1CB',
            positive_80: '#3FC699',
            positive_100: '#10B77F',
            positive_120: '#159E72',
        },
        text: {
            primary: '#15181A',
            seconday: '#566063',
            tertiary: '#6F787B',
            disabled : '#A6ABAD',
            static_primary: 'rgba(255,255,255,1)',
            static_secondary: 'rgba(255,255,255,0.85)',
            static_tertiary: 'rgba(255,255,255,0.7)',
            static_disabled: 'rgba(255,255,255,0.6)',
        }
    }
}


export const darkTheme = {
    typography,
    size,
    color: {
        steel: {
            grey_00: '#0F1215',
            grey_005: '#121517',
            grey_01: '#141719',
            grey_02: '#171B1C',
            grey_03: '#1A1E1F',
            grey_04: '#1E2224',
            grey_05: '#23282A',
            grey_06: '#2A3032',
            grey_07: '#31383A',
            grey_08: '#424A4D',
            grey_09: '#555F62',
            grey_10: '#6F787B',
            grey_11: '#899194',
            grey_12: '#A5AAAC',
            grey_13: '#BCC1C2',
            grey_14: '#D1D5D6',
            grey_15: '#E1E4E5',
            grey_16: '#E9EBEC',
            grey_17: '#EEF1F1',
            grey_18: '#F3F5F6',
            grey_19: '#F6F8F8',
            grey_20: '#F9FAFA',
            grey_21: '#FFFFFF',
        },
        semantic: {
            positive_05: '#232F2F',
            positive_10: '#243835',
            positive_20: '#25463E',
            positive_40: '#24604E',
            positive_80: '#269C75',
            positive_100: '#CEEDE3',
            positive_120: '#52C7A0',
        },
        text: {
            primary: '#F9FAFA',
            seconday: '#A5AAAC',
            tertiary: '#899194',
            disabled : '#6F787B',
            static_primary: 'rgba(255,255,255,1)',
            static_secondary: 'rgba(255,255,255,0.85)',
            static_tertiary: 'rgba(255,255,255,0.7)',
            static_disabled: 'rgba(255,255,255,0.6)',
        }
    }
}


export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${props => props.theme.color.steel.grey_00}
    }

`;
