import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './components/pages/About';
import Header from './components/layout/Header';
import Players from './components/Players';
import { playersList } from './components/playersdata'
import SearchBar from './components/SearchBar'


class App extends Component {
  constructor() {
    super();
    this.state = {
      players: playersList
    }
  }

  markSelected = (id) => {
    this.setState(
      {
        players: this.state.players.map(player => {
          if (player.id === id) {
            player.selected = !player.selected;
          }
          return player;
        })
      });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <div className='tc'>
                  <SearchBar />
                  <Players players={this.state.players}
                    markSelected={this.markSelected} />
                </div>
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />
          </div>
        </div>
      </Router >
    );
  }

}

export default App;
