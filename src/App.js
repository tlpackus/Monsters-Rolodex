import { Component } from 'react';
import crystal from './Crystal.png';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
        )
      )
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={crystal} className="App-logo" alt="logo" />
          <h1>Monster Rolodex</h1>
          <input className='search-box' type='search' placeholder='search-monsters' onChange={() => {

          }}/>
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
