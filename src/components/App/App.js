import React, { Component } from 'react';

import './app.css';

import Header from '../Header';
import Search from '../Search';
import TodoList from '../TodoList';
import FilterStatus from '../FilterStatus';

export default class App extends Component {
    // const time = new Date().toString();
    //начальные значения списка
    state = {
        dataСollection: [
            { label: 'Learn React', important: false, id: 1 },
            { label: 'First App', important: true, id: 2 },
            { label: 'Drink Coffee', important: false, id: 3 }
        ]
    };

    deleteItem = (id) => {
        this.setState(({ dataСollection }) => ({
            dataСollection: dataСollection.filter(el => el.id !== id)
        }));
    };

    render() {
        return (
            <div className="todo-app">
                <Header toDo={1} done={3} />

                <div className="top-panel d-flex">
                    <Search />
                    <FilterStatus />
                </div>

                <TodoList
                    data={this.state.dataСollection}
                    onDeleted={this.deleteItem}
                />
            </div>
        );
    }
}
