import React, {useState} from 'react'
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


const Dropdown = ({values, handleValueChange}) => {
  
  return (
    <Select>
      {values.map((value, index) => (
        <option
        onClick={(value) => handleValueChange(value)}
        key={index}>
          {value}
        </option>
      ))}
    </Select>
  )
}
export default Dropdown
