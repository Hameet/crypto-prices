import styled from 'styled-components'
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

const StyledHeader = styled.div`
  display: flex;
  // Mobile friendly by default
  flex-direction: column;

  border: 5px solid gray;
  box-shadow: 5px 5px #ccc;
  // padding: 10px;
  // margin: 10px;

  // Switch to rows on large devices
  @media ${device.laptop} {
    flex-direction: row;
  }
  // background-image: url(${img});
  // width: 100%;
  // max-width: 981px;
  // height: 380px;
  // margin-left: auto;
  // margin-right: auto;
  // border: 1px solid #000;
  margin-bottom: 50px;
`

export { StyledHeader }
