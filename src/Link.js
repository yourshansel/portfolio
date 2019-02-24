import styled from 'styled-components'

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-family: 'CenturyGothic-Bold';
  transition: all 0.25s ease;
  color: #1DB954;

  &:hover {
    text-decoration: underline;
    color: #21DA6B;
  }
`


export default Link
