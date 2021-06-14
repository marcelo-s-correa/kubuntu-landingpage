import  { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

    body {
        margin: 0%;
        padding: 0;
        box-sizing: border-box;
        background: #FBFBFB;
        font-family: 'Poppins', sans-serif;
        font-weight: normal;
        font-size: 14px;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

`

export default Global;