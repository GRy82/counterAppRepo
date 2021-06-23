import React, { Component } from 'react';

//this is a controlled component. Does not have its own state
//Is only updated via props. Raises events when its data needs changing.

class Counter extends Component {
    render() { 
        return (
        <div className="row">
            <div className="col-1">
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            </div>
            <div className="col">
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
                    className='btn btn-secondary btn-sm m-2'>
                        +
                </button>
                <button 
                    onClick={() => this.props.onDecrement(this.props.counter)} 
                    className='btn btn-secondary btn-sm'>
                        -
                </button>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm m-2">
                        Delete
                </button>
            </div>
        </div>
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