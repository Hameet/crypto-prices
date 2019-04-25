import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 50px;
  //   overflow-y: hidden;
  //   padding-left: 20px;
  //   padding-right: 20px;
  //   margin-left: -20px;
  display: flex;
  flex-direction: column;
  left: 0;
  bottom: 0;
  font-size: 20px;
  font-weight: bold;
  background-color: black;
  color: white;
  width: 100%;
  // position: fixed;
  overflow-x: hidden;
`
const StyledText = styled.p`
font-family: Arial, Helvetica, sans-serif
  font-weight: bold;
  font-size: 18px;
  color: #428bca;;
  text-align: center;
  padding-top: 20px;
  
`
const StyledLink = styled.a`
  text-decoration: none;
`

// const TABLET = 'tablet'
// const DESKTOP = 'desktop'
// const MOBILE = 'mobile'
// const Wrapper = styled.div`
//   background-color: #202020;
//   border-top: 7px solid #444141;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   ${styledMap('format', {
//     [DESKTOP]: `
//       height: 98px;`,
//     [MOBILE]: `
//       height: 135px;
//       flex-direction: column;`,
//     [TABLET]: `
//       height: 100px;`
//   })}
// `

export { Wrapper, StyledText, StyledLink }
