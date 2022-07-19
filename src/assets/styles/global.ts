import { createGlobalStyle } from 'styled-components'

type GlobalStyleProps = {
  theme: {
    colors: {
      primary: string,
      secondary: string,
    }
  }
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  :root {
    --font-regular: 400;
    --font-medium: 700;
    --font-bold: 900;
    --v-anchor-base: #651FFF;
    --v-primarylight-base: #D1C4E9;
    --v-primary-base: #651FFF;
    --v-primarydark-base: #311B92;
    --v-secondarylight-base: #E1BEE7;
    --v-secondary-base: #9C27B0;
    --v-secondarydark-base: #4A148C;
  }

  html,
  body {
    color: var(--v-primarylight-base);
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
