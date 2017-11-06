import React, { Component } from 'react';
import { Route } from 'react-router';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import CurrencyContainer from '../components/CurrencyContainer';
import AboutPage from '../components/AboutPage';

class App extends Component{

  render(){
    return(
      <div className="App">
          <NavBar />
          <Route path='/' component={SearchBar} />

          <Route path='/:currencyCode' render={({ match }) => {
          return (
            <CurrencyContainer match={ match }/>
          )
        }}/>
      </div>
    )
  }
}

export default App;
