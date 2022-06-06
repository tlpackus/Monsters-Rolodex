import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import Crystal from './Crystal.png';
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

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={Crystal} className="App-logo" alt="logo" />
          <h1 className='App-title'>Monster Rolodex</h1>
          <SearchBox 
            className='monsters-search-box'
            onChangeHandler={onSearchChange}
            placeholder='search monsters'
          />
          <CardList monsters={filteredMonsters}/>
        </header>
      </div>
    )
  }   
}
export default App;
