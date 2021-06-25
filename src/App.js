import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import logo from './logo.svg';
import './App.css';

// Instead of function App(), use class. By using class component, you can access 'state'.
// This Component has method called setState(). You can use it on the 'button' element.
class App extends Component {
  constructor() {
    super() 
    // Get the data from API
      this.state = {
        // Make an array of objects: monsters
        monsters: [],
        searchField: ''
      };

      // Set handleChange function this
      //this.handleChange = this.handleChange.bind(this);
  }

  // Use lift cycle method to get backend data
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // Convert the returned response to JSON format
    .then(users => this.setState( { monsters: users })) // Use setState() method to change the empty monsters array to users array retrieve from the backend data
  }

  // Extract the handleChange method. 
  // Use Arrow Function to avoid setting 'this' in the contractor for custom functions.
  handleChange = e => {
    this.setState({ searchField: e.target.value})
  }

  // Use the render() method to return HTML markup
  render() {
    // const { monsters, searchField } = this.state;
    const monsters = this.state.monsters;
    const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange= { this.handleChange } />
        <CardList monsters= { filteredMonsters }></CardList>      
      </div>
    )
  }
}

export default App;


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello my name is Emily.
        </p>
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
*/