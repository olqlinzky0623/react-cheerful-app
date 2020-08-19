import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from 'theme/GlobalStyles'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles/>
  </React.StrictMode>,
  document.getElementById('__base')
)

serviceWorker.register()
