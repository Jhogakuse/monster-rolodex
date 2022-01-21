import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {id: 1, name : 'Frankenstein'}, 
        {id: 2, name : 'Dracula'}, 
        {id: 3, name : 'Zombie'}, 
      ]
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
    return(
      <div className='App'>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
