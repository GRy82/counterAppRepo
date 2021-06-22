import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
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

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(el => el.id !== counterId);
        this.setState({ counters });
    }
    

    render() { 
        return ( 
            <div>
                {this.state.counters.map(counter => 
                    <Counter key={counter.id} 
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    counter={counter}
                    />
                )}
            </div>
         );
    }
}
 
export default Counters;