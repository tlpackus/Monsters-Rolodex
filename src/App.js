import { Component } from 'react';
import crystal from './Crystal.png';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
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

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }

  render(){

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={crystal} className="App-logo" alt="logo" />
          <h1>Monster Rolodex</h1>
          <input 
            className='search-box' 
            type='search' 
            placeholder='search-monsters' 
            onChange={this.onSearchChange}/>
          {
            filteredMonsters.map((monster) => {
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
