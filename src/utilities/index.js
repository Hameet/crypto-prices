// This function splits the Price into an array of 2 items. Then it measures the length of the first item and if it is less than 2 it rounds off the number of decimals to 6, otherwise 2.
export const RoundOffPrice = s => {
  var len = s.split('.')[0].length
  return len < 2
    ? parseFloat(Number(s)).toFixed(6)
    : len >= 2
      ? parseFloat(Number(s)).toFixed(2)
      : Number(s)
}

// Works in a similar fashion to the one above
// const RoundOffVol = s => {
//   console.log('length', s)
//   var len = s.split('.')[1].length
//   return len < 2
//     ? parseFloat(Number(s)).toFixed(6)
//     : len >= 2
//       ? parseFloat(Number(s)).toFixed(2)
//       : Number(s)
// }

export const RoundOffPercentage = num => Number.parseFloat(num).toFixed(2)

export const RoundOffBig = num => {
  // Nine Zeroes for Billions
  return Math.abs(Number(num)) >= 1.0e9
    ? Math.round(Math.abs(Number(num)) / 1.0e9) + 'B'
    : // Six Zeroes for Millions
    Math.abs(Number(num)) >= 1.0e6
      ? Math.round(Math.abs(Number(num)) / 1.0e6) + 'M'
      : null
}

// These 2 functions use the one's above to round off the strings and add commas to them.
// export const VolumeConvert = vol =>
//   vol ? RoundOffVol(vol).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : null

export const ConvertSupply = supply =>
  supply ? RoundOffPrice(supply).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : null

export const isPositive = factor => factor < 0
