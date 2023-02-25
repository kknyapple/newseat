import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.color.white};
    color:${(props) => props.theme.color.black};
    margin: 0;
    padding: 0;
    font-family: 'IBM Plex Sans KR', sans-serif;
    }
`;

export default GlobalStyle;
