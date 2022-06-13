import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import Crystal from './Crystal.png';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('a'); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

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
export default App;
