import React, { Component } from 'react';

import './app.css';

import Header from '../Header';
import Search from '../Search';
import TodoList from '../TodoList';
import FilterStatus from '../FilterStatus';
import AddItem from '../AddItem';

export default class App extends Component {
    maxId = 100;
    // const time = new Date().toString();
    //начальные значения списка
    state = {
        dataСollection: [
            this.createTodoItem('Learn React'),
            this.createTodoItem('First App'),
            this.createTodoItem('Drink Coffee')
        ],
        term: '',
        filter: 'all'
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            id: this.maxId++,
            done: false
        };
    }

    deleteItem = id => {
        this.setState(({ dataСollection }) => ({
            dataСollection: dataСollection.filter(el => el.id !== id)
        }));
    };

    addItem = text => {
        const newItem = this.createTodoItem(text);

        this.setState(({ dataСollection }) => {
            const newArr = [...dataСollection, newItem];

            return {
                dataСollection: newArr
            };
        });
    };

    onToggleImportant = id => {
        this.setState(({ dataСollection }) => {
            const idx = dataСollection.findIndex(el => el.id === id);

            const oldItem = dataСollection[idx];
            const newItem = { ...oldItem, important: !oldItem.important };

            const newArr = [
                ...dataСollection.slice(0, idx),
                newItem,
                ...dataСollection.slice(idx + 1)
            ];

            return {
                dataСollection: newArr
            };
        });
    };

    onToggleDone = id => {
        this.setState(({ dataСollection }) => {
            const idx = dataСollection.findIndex(el => el.id === id);

            const oldItem = dataСollection[idx];
            const newItem = { ...oldItem, done: !oldItem.done };

            const newArr = [
                ...dataСollection.slice(0, idx),
                newItem,
                ...dataСollection.slice(idx + 1)
            ];

            return {
                dataСollection: newArr
            };
        });
    };

    search = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    };

    onSearchChange = term => {
        this.setState({ term });
    };
    onFilterChange = filter => {
        this.setState({ filter });
    };

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter(item => !item.done);
            case 'done':
                return items.filter(item => item.done);
            default:
                return items;
        }
    }

    render() {
        const { dataСollection, term, filter } = this.state;
        const visibleItems = this.filter(
            this.search(dataСollection, term),
            filter
        );

        const doneCount = this.state.dataСollection.filter(el => el.done)
            .length;
        const todoCount = this.state.dataСollection.length - doneCount;

        return (
            <div className="todo-app">
                <Header toDo={todoCount} done={doneCount} />

                <div className="top-panel d-flex">
                    <Search onSearchChange={this.onSearchChange} />
                    <FilterStatus
                        filter={filter}
                        onFilterChange={this.onFilterChange}
                    />
                </div>

                <TodoList
                    data={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <AddItem onItemAdd={this.addItem} />
            </div>
        );
    }
}
