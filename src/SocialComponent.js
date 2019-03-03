import React, { Component } from 'react';
import styled from 'styled-components';
import { Camera, Twitter, GitHub, Mail} from 'react-feather';
import Link from './Link.js';
import { slideUp }  from './Animation.js';




const Wrapper = styled.div`
  animation: ${slideUp} 0.4s ease-out forwards;
  display:flex
  justify-content: center;
  align-items: center;
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  bottom: 24px;
`

const Box = styled(Link)`
  display: block;
  height: 24px;
  width: 24px;
  padding: 16px;
  color: #FFFFFF;

  &:hover{
    color:#21DA6B;
  }
`
;

class Social extends Component{
  render(){
    return(
      <Wrapper>
      <Box href="https://twitter.com/yourshansel" target="_blank" title="Twitter"><Twitter/></Box>
      <Box href="https://instagram.com/yourshansel" target="_blank" title="Unsplash"><Camera/></Box>
      <Box href="https://github.com/yourshansel" target="_blank" title="GitHub"><GitHub/></Box>
      <Box href="mailto:yourshansel@gmail.com" title="Email"><Mail/></Box>
      </Wrapper>
    )}

}

export default Social;
