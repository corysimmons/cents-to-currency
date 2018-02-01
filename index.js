const currencyFormatter = require(`currency-formatter`)

module.exports = (centsInUSD, currencyCode = `USD`) => {
  return currencyFormatter.format((centsInUSD / 100).toFixed(2), {
    code: currencyCode,
  })
}
