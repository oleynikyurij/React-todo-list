import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Search from './components/Search';
import TodoList from './components/TodoList';

const App = () => {
    const time = new Date().toString();
    //начальные значения списка
    const dataСollection = [
        { label: 'Learn React', important: false },
        { label: 'First App', important: true },
        { label: 'Drink Coffee', important: false }
    ];

    return (
        <section>
            <span>{time}</span>
            <Header />
            <Search />
            <TodoList data={dataСollection} />
        </section>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
