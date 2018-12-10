import React, { Component } from 'react';

import Header from '../Header';
import Search from '../Search';
import TodoList from '../TodoList';
import FilterStatus from '../FilterStatus';

const App = () => {
	// const time = new Date().toString();
	//начальные значения списка
	const dataСollection = [
			{ label: 'Learn React', important: false, id: 1 },
			{ label: 'First App', important: true, id: 2 },
			{ label: 'Drink Coffee', important: false, id: 3 }
	];

	return (
			<div className="wrap">
					<Header toDo={1} done={3} />

					<div>
							<Search />
							<FilterStatus />
					</div>

					<TodoList data={dataСollection} />
			</div>
	);
};

export default App;