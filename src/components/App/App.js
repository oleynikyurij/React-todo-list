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
		
		addItem = (text) => {
			
			const newItem = {
				label: text,
				important: false,
				id: this.maxId++

			};

			this.setState(({ dataСollection }) => {
				const newArr = [...dataСollection, newItem];

				return {
					dataСollection: newArr,
				}
			});
		}

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
								<AddItem onItemAdd = {this.addItem}/>
            </div>
        );
    }
}
