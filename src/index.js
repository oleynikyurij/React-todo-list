import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Search from './components/Search';
import TodoList from './components/TodoList';

const App = () => {
    const time = new Date().toString();
    return (
        <section>
            <span>{time}</span>
            <Header />
            <Search />
            <TodoList />
        </section>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
