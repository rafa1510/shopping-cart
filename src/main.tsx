import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyle from './components/GlobalStyle'
import StyledNavbar from './components/StyledNavbar'
import StyledHome from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <StyledHome />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <StyledNavbar />
    <RouterProvider router={router} />
  </React.StrictMode>
)
