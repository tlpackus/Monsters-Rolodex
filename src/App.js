import { Component } from 'react';
import crystal from './Crystal.png';
// import logo from './logo.svg';
// import crystal from './Crystal.png'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: 'ad3243b11'
        },
        {
          name: 'Frank',
          id: 'ss89778'
        },
        {
          name: 'Jacky',
          id: 'hh7512122'
        },
        {
          name: 'Andrei',
          id: 'we33#124'
        }
      ]
    };
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={crystal} className="App-logo" alt="logo" />
          <h1>Crystalline Media</h1>
          {
            this.state.monsters.map((monster) => {
              return (
                <div key={monster.id}>
                  <h3>{monster.name}</h3>
                </div>);
            })
          }
        </header>
      </div>
    )
  }   
}
export default App;
