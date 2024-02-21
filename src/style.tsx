import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border:0 none;
        font-family: 'Arial';
        letter-spacing: 2.3px;
    }
    body,
    #root,
    .page {
        width: 100%;
        height: 100%;
        background-color: #333;
        overflow-x: hidden;
    }
    body::-webkit-scrollbar {
        width: 0;
    }
`