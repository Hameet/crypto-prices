import styled from 'styled-components'

const Table = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between
  border: 2px solid black;
`

const Price1h = styled.div`
  border-radius: 15px;
  content-align: center;
  color: white;
  width: 35px;
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  font-size: 15px;
  background-color: ${function (reactive) {
    // console.log('reactive', reactive)
    const str = reactive.children
    return str.substring(0, str.length - 1) < 0 ? 'red' : 'green'
  }};
`
const Name = styled.p`
font-family: Arial, Helvetica, sans-serif
  font-weight: bold;
  font-size: 30px;
`
const Vol24h = styled.p`
font-family: Arial, Helvetica, sans-serif
  font-weight: bold;
  font-size: 20px;
`
export { Table, Price1h, Name, Vol24h }
