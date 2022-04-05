import { ThemeType } from './Theme';
import { createGlobalStyle } from "styled-components";


interface Props {
    theme: ThemeType
}
const GlobalStyle = createGlobalStyle<Props>`
    @-ms-viewport {
        width: device-width;
    }
    * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        box-sizing: border-box;
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
    }
    html,
    body {
        width: 100%;
        max-width: 1920px;
        margin: auto;
        font-size: 16px;
        font-family: "Open Sans", sans-serif;
        line-height: normal;
        color: #222;
        background-color: ${({theme}) => theme.bg} ;    
        behavior: smooth;
        position: relative;
        &::-webkit-scrollbar {
		    width: 5px;
        }
        &::-webkit-scrollbar-track {
            background: #000;
        }
        &::-webkit-scrollbar-thumb {
            background: #ddd;
        }
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    button, input, select, textarea {
    outline: 0;
    border: none;
    font-size: inherit;
    font-family: inherit;
}
`

export default GlobalStyle