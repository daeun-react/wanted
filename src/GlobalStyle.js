import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
    ${reset}
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        background-color: rgba(20, 20, 20, 1);
        color: #333333;
        background-color: #fafafa;
    }
    ul {
        list-style: none;
    }

    ul li {
        position: relative;
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }

    ul li > * {
        height: 100%;
        font-size: 14px;
        color: #333;
        font-weight: 600;
        line-height: 1;
    }
    a{
        display: block;
        text-decoration: none;
        cursor: pointer;
    }
`;

export default GlobalStyles;
