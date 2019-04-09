export const RoundOffPrice = function (s) {
  var len = s.split('.')[0].length
  return len < 2
    ? parseFloat(Number(s)).toFixed(6)
    : len >= 2
      ? parseFloat(Number(s)).toFixed(2)
      : Number(s)
}

export const RoundOffVol = function (s) {
  var len = s.split('.')[1].length
  return len < 2
    ? parseFloat(Number(s)).toFixed(6)
    : len >= 2
      ? parseFloat(Number(s)).toFixed(2)
      : Number(s)
}
