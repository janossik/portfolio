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
      color: ${({ theme }) => theme.color.backgroundsecondary};
    }

    textarea{
      resize: none;
    }
    
    ::-webkit-scrollbar {
      width: 10px;
    }


    ::-webkit-scrollbar-track {
      background:  #c0c0c0;
    }

    ::-webkit-scrollbar-thumb {
      background:${({ theme }) => theme.color.tertiary};

    }

    ::-webkit-scrollbar-thumb:hover {
      background:  #868686;
    }
`;

export default GlobalStyle;
