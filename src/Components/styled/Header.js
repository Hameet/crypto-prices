import styled from 'styled-components'

import img from '../../images/pig.jpeg'

import { device } from './device'

// const device = {
//   mobileS: `(min-width: ${size.mobileS})`,
//   mobileM: `(min-width: ${size.mobileM})`,
//   mobileL: `(min-width: ${size.mobileL})`,
//   tablet: `(min-width: ${size.tablet})`,
//   laptop: `(min-width: ${size.laptop})`,
//   laptopL: `(min-width: ${size.laptopL})`,
//   desktop: `(min-width: ${size.desktop})`,
//   desktopL: `(min-width: ${size.desktop})`
// }

const StyledHeader = styled.div`
display: flex;
  flex-direction: column;
  
  border: 1px solid gray;
  box-shadow: 5px 5px #ccc;
  padding: 10px;
  margin: 10px;
  margin-bottom: 40px;
  ${device.laptop`
    flex-direction: row;
  `};
  // // display: flex;
  // flex-direction: column;
  // border: 5px solid gray;
  // box-shadow: 5px 5px #ccc;
  // // Switch to rows on large devices
  // // @media ${device.laptop} {
  // //   flex-direction: row;
  // // }
  // // @media ${device.mobileL} {
  // //   flex-direction: row;
  // // }

  // // background-image: url(${img});
  // // width: 100%;
  // // max-width: 981px;
  // // height: 380px;
  // // margin-left: auto;
  // // margin-right: auto;
  // // border: 1px solid #000;
  // margin-bottom: 50px;
`

// const TABLET = 'tablet'
// const DESKTOP = 'desktop'
// const MOBILE = 'mobile'

// const StyledHeader = styled.section`
//   ${styledMap('format', {
//     [DESKTOP]: `
//       width: 100%;
//       margin: 0;
//       padding: 0;
//       // padding-top: 15px;
//       text-align: center;
//       background-color: #ffffff;
//       @media ${device.laptop} {
//         flex-direction: row;
//       }

//       ${({ format }) =>
//     format === `${DESKTOP}` ? 'margin-right: 120px;' : null}
//       [MOBILE]:
//       `,

//     [MOBILE]: `
//     @media ${device.mobileL} {
//       flex-direction: row;
//     }`,
//     [TABLET]: `
//       width: 100%;
//       margin: auto;
//       @media ${device.laptop} {
//         flex-direction: row;
//       }
//       text-align: center;
//       background-color: #ffffff;
//     `
//   })}
// `

const Image = styled.img``
export { StyledHeader, Image }
