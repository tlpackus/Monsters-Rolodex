import { Component } from 'react';
// import logo from './logo.svg';
import crystal from './Crystal.png'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Theron',
      company: 'Crystalline Media'
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={crystal} className="App-logo" alt="logo" />
          <h1>{this.state.company}</h1>
          <p>
            Hi {this.state.name}
          </p>
          <button onClick={() => {
            this.setState({ name: 'T'});
          }}>Change Name
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }   
}
export default App;
