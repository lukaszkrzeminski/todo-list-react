import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
         box-sizing: border-box;
         line-height: 1.15;
    }

    *, ::after, ::before{
         box-sizing: inherit;
    }

    body{
         font-family: 'Lato', sans-serif;
         margin: 10px;
         background-color: ${({theme}) => theme.color.alto};
    }
`;