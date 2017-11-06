import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shortToLong from '../data'
import ReactTooltip from 'react-tooltip';

class Currency extends Component{

  state = {

  }

  handleHover(ev){
    console.log(shortToLong[ev.target.innerText]);

  }

  render(){
    return(
      <li>
        <Link to={`/${this.props.info[0]}`} data-tip={shortToLong[this.props.info[0]]}><ReactTooltip />{this.props.info[0]}</Link> : {Math.round((this.props.info[1] * this.props.amount)*1000)/1000}
      </li>
    )
  }
}

Currency.defaultProps = {

}

Currency.propTypes = {

}

export default Currency;
