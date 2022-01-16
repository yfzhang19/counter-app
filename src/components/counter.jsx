import React, { Component } from 'react';

class Counter extends React.Component {
 
        //add property to amke it dynamic
        state = {
            count = 0
        };

        render() { 
            return (
             <div>
                <span>{this.state.count}</span>

                <button>Increment</button>
            </div>
        ); 
                //within bracket is dyanmic
                //this = current object
    }
}
 
export default Counter;