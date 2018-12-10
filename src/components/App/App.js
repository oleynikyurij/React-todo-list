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
        ]
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
					dataСollection: newArr,
				}
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
							dataСollection: newArr,
						}
        });
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
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <AddItem onItemAdd={this.addItem} />
            </div>
        );
    }
}
