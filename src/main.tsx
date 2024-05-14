import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './components/GlobalStyle'
import StyledNavbar from './components/StyledNavbar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <StyledNavbar></StyledNavbar>
  </React.StrictMode>
)
