import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CurrencyList from './CurrencyList'
import shortToLong from '../data'
import { fetchCurrencies } from '../services/currencies'

class CurrencyContainer extends Component{

  constructor(props){
    super(props)
    this.state = {
      currencyInfo: [],
      base: ``,
      amount: 1
    }
  }

  handleAmountChange = (ev) => {
    const newAmount = {amount: ev.target.value}
    this.setState(newAmount)
  }

  render(){
    return(
      <div className="currency-container">
        <h2>{shortToLong[this.state.base]} ({this.state.base})</h2>
        <label htmlFor='currency-amount'>Amount of {this.state.base}</label>
        <input type='number' onChange={this.handleAmountChange} id='currency-amount' value={this.state.amount}/>
        <CurrencyList amount={this.state.amount} currencyInfo={this.state.currencyInfo} />
      </div>

    )
  }

  setNewCurrencyInfo(){
    const code = this.props.match.params.currencyCode
    fetchCurrencies(code)
    .then(json => {
      const newInfo = {currencyInfo: Object.entries(json.rates), base: this.props.match.params.currencyCode}
      this.setState(newInfo)
    })
  }

  // componentWillReceiveProps(nextProps){
  //   console.log("willReceiveProps\nnextProps", nextProps, "\nthis", this);
  // }

  componentDidMount(){
    this.setNewCurrencyInfo()
    }

  shouldComponentUpdate(nextProps, nextState){
  // console.log("shouldComponentUpdate\nthis.props", this.props, "\nthis.state", this.state);
  // console.log("shouldComponentUpdate\nnextProps", nextProps, "\nnextState", nextState);
  // console.log("shouldComponentUpdate\n", this.state.base !== nextProps.match.params.currencyCode );
  return this.state.base !== nextProps.match.params.currencyCode
  }

  componentDidUpdate(){
    // console.log("Component Did Update called");
    this.setNewCurrencyInfo()
  }

  // componentWillUpdate(){
  //   console.log("Component Will Update called");
  //   this.setNewCurrencyInfo()
  // }

}

CurrencyContainer.propTypes = {
  base: PropTypes.string
}

export default CurrencyContainer;
