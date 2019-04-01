// export function getSelectedRestaurant ({ items }) {
//     return items.selectedRestaurant
//   }

const getPrices = ({ prices }) => prices

// const getCurrencies = ({ ABC }, { BTC }) => {
//   ABC, BTC
// }

function getCurrencies ({ rates }) {
  const { ABC, BTC } = rates
  return ABC && BTC
}

export { getCurrencies, getPrices }
