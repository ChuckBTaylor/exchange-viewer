import React, { Component } from 'react';

import shortToLong from '../data'


class SearchBar extends Component{
  constructor(props){
    super(props)
    this.state = {
      input: ""
    }
  }

  handleChange = (ev) => {
    const newState = {input: ev.target.value}
    this.setState(newState)
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/${this.state.input}`)
    this.setState({input: ""})
  }

  render(){
    const optionsArray = Object.entries(shortToLong)
    const options = optionsArray.map((entry, idx) => (<option key={idx} value={entry[0]}>{entry[1]}</option>))
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Currency: </label>
          <input placeholder="USD, GBP, CNY" list="currencies" type='text' value={this.state.input} onChange={this.handleChange} />
          <input type='submit' value="Search" />
        </form>
        <datalist id='currencies' >
          {options}
        </datalist>
      </div>
    )
  }
}

SearchBar.defaultProps = {

}

SearchBar.propTypes = {

}

export default SearchBar;
