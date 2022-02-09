import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(user => {
      this.setState({monsters: user})
    })
  }

  render() {
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });
    return(
      <div className='App'>
        <SearchBox 
          placeholder='Search Monster' 
          handleChange={e => {
              this.setState({searchField: e.target.value}, () => {
                // console.log(this.state.searchField);
              });
            }
          }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
