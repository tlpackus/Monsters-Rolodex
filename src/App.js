import { Component } from 'react';
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
    return <div className="App">
      {
        this.state.monsters.map((monster) => {
          return <h1 key={monster.id}> {monster.name}</h1>;
        })
      }
    </div>     
  }   
}
export default App;
