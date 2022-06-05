import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  fontSize: {
    h6: '1.25rem',
    h5: '1.5rem',
    h4: '2.125rem',
    h3: '3rem',
    h2: '3.75rem',
    h1: '6rem',
    subtitle: '1.125rem',
    body1: '1rem',
    body2: '0.875rem',
  },
  colors: {
    gold: '#B48650',
    gray: '#5a5a5a',
    lightgray: '#D3D3D3',
    white: '#fff',
    orange: '	#FF8C00',
    lightgold: '#f3ae5e',
    inherit: 'inherit',
    default: '#1B3643',
  },
  breakPoints: {
    mobile: '@media only screen and (max-width: 599px)',
    tablet: '@media only screen and (min-width: 600px)',
    desktop: '@media only screen and (min-width: 1200px)'
  },
  maxWidth: '1240px',
}
