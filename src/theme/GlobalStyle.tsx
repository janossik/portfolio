import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,*::after,*::before{
      box-sizing:border-box;
    }
    body{
      margin:0;
      background-color: ${({ theme: { color } }) => color.background};
      font-family:${({ theme: { font } }) => font.fontFamily.primary};
      font-size:16px;
    }
    html{ 
    }
`;

export default GlobalStyle;
