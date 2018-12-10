import React, { Component } from 'react';

import './style.css';

export default class AddItem extends Component {
    render() {
        return (
            <div className="item-add-form">
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.props.onItemAdd('Hello World')}
                >
                    Add Item
                </button>
            </div>
        );
    }
}
