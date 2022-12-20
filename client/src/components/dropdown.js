import React from 'react'
import styled from 'styled-components'


const Select = styled.select`
display: inline-block;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
font-size: ${props => props.theme.fontmd}; 
outline: none;
border: none;
  width: 100%;
  height: 100%;
  padding-left: 5px;
  margin-left: 10px;

  option {
    color: ${props => props.theme.text};
    background: ${props => props.theme.body};
    display: flex;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const Dropdown = ({chain, handleChange}) => {
  
  return (
    <Select value={chain} onChange={handleChange}>
      <option value="Arbitrum">Arbitrum</option>
      <option value="Avalanche">Avalanche</option>
    </Select>
  )
}
export default Dropdown
