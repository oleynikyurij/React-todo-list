import React, { Component } from 'react';

import  './style.css';

// import './item-status-filter.css';

export default class FilterStatus extends Component {
    render() {
        return (
            <div className="btn-group">
                <button type="button" className="btn btn-info">
                    All
                </button>
                <button type="button" className="btn btn-outline-secondary">
                    Active
                </button>
                <button type="button" className="btn btn-outline-secondary">
                    Done
                </button>
            </div>
        );
    }
}
