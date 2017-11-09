import React, { Component } from 'react';

class ItemForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: " ",
            cost: " "
        }
    }

    render() {
        return (
            <form className="ItemForm" onSubmit={this.handleSubmit.bind(this)}>
                <h2>Add a Item</h2>
                    <label>Item</label>
                    <input type="item" value={this.state.item} onChange={this.handleItemChange.bind(this)}/>
                    <label>Cost</label>
                    <input type="cost" value={this.state.cost} onChange={this.handleCostChange.bind(this)}/>
                <p className="ItemForm__button-bar">
                    <button type="submit">Add</button>
                </p>
            </form>
        );
    }

    handleItemChange(event) {
        this.setState({
            item: event.target.value
        });
    }

    handleCostChange(event) {
        this.setState({
            cost: event.target.value
        });
    }

    handleSubmit(event) {
        // by default a form submission will refresh the page. preventDefault stops that from happening.
        event.preventDefault();
        // Call the function that App.js passes into the onSubmit attribute.
        // Pass it a new contact object.
        this.props.onSubmit({
            item: this.state.item,
            cost: this.state.cost,
        });
        // Clear the form by simply updating the state with empty form values.
        this.setState({
            item: "",
            cost: "",
        })
    }

}

export default ItemForm;
