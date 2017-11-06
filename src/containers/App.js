import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import CurrencyContainer from '../components/CurrencyContainer';
import AboutPage from '../components/AboutPage';
// import WordPage from '../components/WordPage';

class App extends Component{

  render(){
    return(
      <div className="App">
          <NavBar />
          <Route path='/' component={SearchBar} />
          <Switch>
            <Route path='/about' component={AboutPage} />

          </Switch>
          <Route path='/currency/:currencyCode' render={({ match }) => {
          return (
            <CurrencyContainer match={ match }/>
          )
        }}/>
      </div>
    )
  }
}

export default App;
