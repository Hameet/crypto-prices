import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 50px;
  flex-direction: row;
  left: 0;
  bottom: 0;
  font-size: 20px;
  font-weight: bold;
  background-color: #ed5565;
  color: white;
  width: 100%;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 15px;
`
const StyledText = styled.p`
font-family: Arial, Helvetica, sans-serif
  font-weight: bold;
  font-size: 20px;
  color: #428bca;;
  text-align: center;
  color: white;
  font-weight: 800;
  
`
const StyledLink = styled.a`
  --border-size: 4px;
  --border-color: blue;
  text-decoration: none;
  font-family: 'Museo Sans Cyrl 900', sans-serif;
  max-width: 250px;
  display: inline-block;
  text-decoration-line: none;
  text-align: center;
  width: 100%;
  background-color: black;
  color: rgb(255, 255, 255);
  font-size: 20px;
  margin: 10px;
  padding-right: 5px;
  border-radius: 2px;
  box-shadow: inset 0 0 0 var(--border-size) white;
  transition: background 0.8s ease;

  &:hover {
    background: rgba(100, 0, 0, 0.03);
  }
`

const StyledButton = styled.button``

export { Wrapper, StyledText, StyledLink, StyledButton }
