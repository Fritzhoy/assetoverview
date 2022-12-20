import React from 'react'
import styled from 'styled-components';


const Iframe = ({link, title}) => {
  return (<iframe src={link} frameBorder="0" height="400" width="80%" overflow="hidden" title={title} ></iframe>)
};

export default Iframe
