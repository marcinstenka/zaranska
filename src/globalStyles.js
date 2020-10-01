import { createGlobalStyle } from 'styled-components';
import Antic from './fonts/AnticDidone-Regular.otf';
import IntervogueSoftRegular from './fonts/IntervogueSoftRegular.otf';
import IntervogueSoftMedium from './fonts/IntervogueSoftMedium.otf';
const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Antic';
    src: url(${Antic}) format('opentype');
    };
    @font-face {
        font-family: 'IntervogueSoftRegular';
        src: url(${IntervogueSoftRegular}) format('opentype');
        };
    @font-face {
        font-family: 'IntervogueSoftMedium';
        src: url(${IntervogueSoftMedium}) format('opentype');
        };
    `
    ;
export default GlobalStyle;