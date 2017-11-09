import React, { Component } from 'react';
// Grab font-awesome stylesheet for our trash can icon. Note, we had to add this
// to our package.json using `npm install --save-dev font-awesome`.
import "font-awesome/css/font-awesome.css";

// Define tha ContactCard comonent using ES6 class syntax
class ShoppingList extends Component {

    render() {
        // Here we added a delete button. When clicked, it directly calls the
        // function that was passed to us via onDelete=....
        return (
            <div className="ShoppingList">
                <div className="listItem">{this.props.listItem.item}</div>
                <div className="listItem">{this.props.listItem.cost}</div>
                <button className="listItem_delete-button"
                        title={"Delete " + this.props.listItem.name}
                        onClick={this.props.onDelete}>
                    <i className="fa fa-trash fa-lg"></i>
                </button>
            </div>
        );
    }
}

// We must specify that our ContactCard component is the default export of this file.
// This will be used on line 6 of App.js
export default ShoppingList;
