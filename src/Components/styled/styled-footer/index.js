import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 50px;
  //   overflow-y: hidden;
  //   padding-left: 20px;
  //   padding-right: 20px;
  //   margin-left: -20px;
  // display: flex;
  flex-direction: row;
  left: 0;
  bottom: 0;
  font-size: 20px;
  font-weight: bold;
  background-color: #ed5565;
  color: white;
  width: 100%;
  text-align: center;
  // align-content: center;
  // position: fixed;
  // overflow-x: hidden;
`
const StyledText = styled.p`
font-family: Arial, Helvetica, sans-serif
  font-weight: bold;
  font-size: 20px;
  color: #428bca;;
  text-align: center;
  padding-top: 20px;
  color: white;
  font-weight: 800;
  
`
const StyledLink = styled.a`
  text-decoration: none;
  font-family: 'Museo Sans Cyrl 900', sans-serif;
  max-width: 250px;
  display: inline-block;
  // box-sizing: border-box;
  text-decoration-line: none;
  text-align: center;
  width: 100%;
  background-color: black;
  color: rgb(255, 255, 255);
  font-size: 20px;
  border-radius: 5px;
  // padding-top: 1px;
  margin: 10px;
  padding-right: 5px;
`

const StyledButton = styled.button`
  font-family: 'Museo Sans Cyrl 900', sans-serif;
  max-width: 250px;
  display: inline-block;
  box-sizing: border-box;
  text-decoration-line: none;
  text-align: center;
  width: 100%;
  background-color: black;
  color: rgb(255, 255, 255);
  font-size: 20px;
  border-radius: 5px;
  padding-top: 10px;
  margin: 10px auto;
`

export { Wrapper, StyledText, StyledLink, StyledButton }
