import './App.css';
import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navBar';

class App extends Component {
  state = { 
    counters : [
        { id: 1, value: 0},
        { id: 2, value: 0},
        { id: 3, value: 0},
        { id: 4, value: 0}
    ]
  }

  handleIncrement = (counter) => {
      let counters = [...this.state.counters];
      let index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({ counters });

  }

  handleDecrement = (counter) => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({ counters });

}

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });
      this.setState({ counters });
  }

  handleDelete = (counterId) => {
      const counters = this.state.counters.filter(el => el.id !== counterId);
      this.setState({ counters });
  }

  render(){
    return (
      <React.Fragment>
        <NavBar count={this.state.counters.filter(c => c.value > 0).length}/>
        <main className='container'>
          <Counters 
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
