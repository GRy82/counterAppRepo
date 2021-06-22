import React, { Component } from 'react';

//this is a controlled component. Does not have its own state
//Is only updated via props. Raises events when its data needs changing.

class Counter extends Component {
    render() { 
        return (
        <React.Fragment>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
                onClick={() => this.props.onIncrement(this.props.counter)} 
                className='btn btn-secondary btn-sm'>
                    Increment
            </button>
            <button 
                onClick={() => this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm m-2">
                    Delete
            </button>
        </React.Fragment>
        );
    }


    getBadgeClasses(){
        let classes = "m-2 badge bg-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;