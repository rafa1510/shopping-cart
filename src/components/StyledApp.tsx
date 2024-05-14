import React from 'react'
import styled from 'styled-components'

interface AppProps {
  className?: string
}

const App = ({ className }: AppProps) => {
  return (
    <div className={className}>
      <h1>Template repo!</h1>
    </div>
  )
}

const StyledApp = styled(App)`
  background-color: #bf4f74;
  font-weight: bold;
`

export default StyledApp
