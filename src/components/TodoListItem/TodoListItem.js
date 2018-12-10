import React, { Component } from 'react';

import './style.css';
export default class TodoListItem extends Component {
    state = {
        done: false
    };
    onLabelClick = () => {
        this.setState({
            done: !this.state.done
        });
    };

    render() {
        const { label, important = false } = this.props;
        const style = {
            color: important ? 'red' : 'black'
        };

        const { done } = this.state;
        let classNames = 'todo-list-item';

        if (done) {
            classNames += ' done';
        }

        return (
            <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    style={style}
                    onClick={this.onLabelClick}
                >
                    {label}
                </span>

                <button
                    type="button"
                    className="btn btn-outline-success btn-sm float-right"
                >
                    <i className="fa fa-exclamation" />
                </button>

                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                >
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }
}
