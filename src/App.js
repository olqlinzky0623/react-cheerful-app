import React, { useEffect } from 'react'
import theme from './theme'
import {ThemeProvider} from 'styled-components'
import {MainLayout} from 'layouts'

function App() {
  localStorage.clear()
  localStorage.setItem('theme', JSON.stringify({
    type: 'light',
    color: 'red'
  }))
  const getTheme = JSON.parse(localStorage.getItem('theme'))
  const myTheme = theme(getTheme.type, getTheme.color)

  useEffect(() => {
    window.document
      .getElementsByTagName('body')
      .item(0)
      .setAttribute('style',`overflow:hidden; background:${myTheme.palette.background.default}; color:${myTheme.palette.secondary};`)
  }, [myTheme])

  return (
      <ThemeProvider theme={myTheme}>
        <MainLayout/>
      </ThemeProvider>
    )
}

export default App


