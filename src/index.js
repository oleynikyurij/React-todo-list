import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import './theme/init.css';

import Header from './components/Header';
import Search from './components/Search';
import TodoList from './components/TodoList';
import FilterStatus from './components/FilterStatus';

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

ReactDOM.render(<App />, document.getElementById('root'));
