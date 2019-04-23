// This function splits the Price into an array of 2 items. Then it measures the length of the first item and if it is less than 2 it rounds off the number of decimals to 6, otherwise 2.
export const RoundOffPrice = function (s) {
  var len = s.split('.')[0].length
  return len < 2
    ? parseFloat(Number(s)).toFixed(6)
    : len >= 2
      ? parseFloat(Number(s)).toFixed(2)
      : Number(s)
}

// Works in a similar fashion to the one above
export const RoundOffVol = function (s) {
  var len = s.split('.')[1].length
  return len < 2
    ? parseFloat(Number(s)).toFixed(6)
    : len >= 2
      ? parseFloat(Number(s)).toFixed(2)
      : Number(s)
}

// These 2 functions use the one's above to round off the strings and add commas to them.
export const VolumeConvert = vol =>
  vol ? RoundOffVol(vol).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : null

export const ConvertSupply = supply =>
  supply ? RoundOffPrice(supply).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : null
