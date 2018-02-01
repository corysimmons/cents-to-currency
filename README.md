# cents-to-currency

Helpful for Stripe and such.

## Install

`npm i cents-to-currency`

## Usage

```js
const centsToCurrency = require('cents-to-currency')

centsToCurrency(2) // '$0.02'
centsToCurrency(2000) // '$20.00'
centsToCurrency(200000) // '$2,000.00'
```
