import React from 'react'
import styled from 'styled-components'

const LogoText = styled.h1`
font-size: ${props => props.theme.fontxl};
color: ${props => props.theme.text};
transition: all 0.2s ease; 
`

const Logo = () => {
  return (
    <LogoText> GMX Asset Overview </LogoText>
  )
}
export default Logo
