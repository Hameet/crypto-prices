import { map } from 'ramda'

// // export function getSelectedRestaurant ({ items }) {
// //     return items.selectedRestaurant
// //   }

// const getPrices = ({ rates }) => rates

// // const getCurrencies = ({ ABC }, { BTC }) => {
// //   ABC, BTC
// // }

// function getCurrencies ({ rates }) {
//   const { ABC, BTC } = rates
//   return ABC && BTC
// }

const getPrices = map(item => item.price_usd)
const getNames = map(item => item.name)

export { getNames, getPrices }
