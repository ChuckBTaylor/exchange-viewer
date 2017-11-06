import React from 'react';
import Currency from './Currency'

const CurrencyList = (props) => {
  const currencies = props.currencyInfo.map((currency, idx) => <Currency amount={props.amount} key={idx} info={currency}/>)
  return (
  <div className="currency-list">
    <ul>
      {currencies}
    </ul>
  </div>
  )
}

CurrencyList.defaultProps = {
  currencyInfo: []
}

export default CurrencyList
