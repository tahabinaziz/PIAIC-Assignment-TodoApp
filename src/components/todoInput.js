import React, { Component } from 'react';

class Input extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: "",
            item: []
        }
    }

    changeHander = (p) => {
        this.setState({
            value: p.target.value
        })
    }

    onSubmit = (todo) => {
        todo.preventDefault();

        let list = this.state.item;
        list.push(this.state.value);
        this.setState({
            item: list,
            value: ""
        })
    }

    render() {
        return (
            <div className="todo-wrapper">
                <h2>Todos App</h2>
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.value} onChange={this.changeHander} />
                    <button className="btn btn-primary">Submit</button>
                    <br />
                    <br />
                        {this.state.value}
                    <br />
                 
                 {this.state.item.map((e) => <ul>{e}</ul>)}
                      
                </form>
            </div>
        )
    }

}
export default Input;