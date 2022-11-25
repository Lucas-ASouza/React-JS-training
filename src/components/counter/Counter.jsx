import React from "react";

class Counter extends React.Component {
    state = { 
            number: this.props.initialNumber
    }


    inc= () => {
        this.setState({
            number: this.state.number + 1
        })
    }
    
    render() {
        return(
            <div>
                <h2>Counter</h2>
                <h3>{this.state.number}</h3>
                <button onClick={this.inc}>+</button>
            </div>
        )
    }  
}

export default Counter 