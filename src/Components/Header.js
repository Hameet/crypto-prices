import styled from 'styled-components'
import styledMap from 'styled-map'

import img from '../images/pig.jpeg'

const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560
}

// const device = Object.keys(size).reduce((acc, cur) => {
//   acc[cur] = `(min-width: ${size[cur]}px)`
//   return acc
// }, {})

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
}

// const StyledHeader = styled.div`
//   display: flex;
//   flex-direction: column;
//   border: 5px solid gray;
//   box-shadow: 5px 5px #ccc;
//   // Switch to rows on large devices
//   @media ${device.laptop} {
//     flex-direction: row;
//   }
//   @media ${device.mobileL} {
//     flex-direction: row;
//   }

//   // background-image: url(${img});
//   // width: 100%;
//   // max-width: 981px;
//   // height: 380px;
//   // margin-left: auto;
//   // margin-right: auto;
//   // border: 1px solid #000;
//   margin-bottom: 50px;
// `

const TABLET = 'tablet'
const DESKTOP = 'desktop'
const MOBILE = 'mobile'

const StyledHeader = styled.section`
  ${styledMap('format', {
    [DESKTOP]: `
      width: 100%;
      margin: auto;
      padding-top: 15px;
      text-align: center;
      background-color: #ffffff;
      @media ${device.laptop} {
        flex-direction: row;
      }
    
      ${({ format }) =>
    format === `${DESKTOP}` ? 'margin-right: 120px;' : null}
      [MOBILE]: 
      `,

    [MOBILE]: `
    @media ${device.mobileL} {
      flex-direction: row;
    }`,
    [TABLET]: `
      width: 100%;
      margin: auto;
      
      text-align: center;
      background-color: #ffffff;
    `
  })}
`

export { StyledHeader }
