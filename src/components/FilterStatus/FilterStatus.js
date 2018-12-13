import React, { Component } from 'react';

import './style.css';

// import './item-status-filter.css';

export default class FilterStatus extends Component {
    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ];

    render() {
        const { filter, onFilterChange } = this.props;
        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button
                    type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => onFilterChange(name)}
                >
                    {label}
                </button>
            );
        });

        return (
            <div className="btn-group">
                {/* <button type="button" className="btn btn-info">
                    All
                </button>
                <button type="button" className="btn btn-outline-secondary">
                    Active
                </button>
                <button type="button" className="btn btn-outline-secondary">
                    Done
                </button> */}
                {buttons}
            </div>
        );
    }
}
