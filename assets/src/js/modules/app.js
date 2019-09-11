import React, { Component } from 'react';
import Guests from './components/Guests';
import MovieSearch from './components/MovieSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="text-center">The Movie List</h1>
        </header>
        {/* <p className="App-intro pt-3">Find Your Movie for Tonight!</p> */}
        <MovieSearch />
      </div>
    );
  }
}

export default App;
