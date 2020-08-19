import {createGlobalStyle} from 'styled-components'
export default createGlobalStyle`
    * {
       margin: 0;
       padding: 0;
    }
    body {
       font-family: system-ui, -apple-system, "Helvetica Neue","Arial";
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
    }
    code { 
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`