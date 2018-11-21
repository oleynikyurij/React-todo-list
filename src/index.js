import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    const items = ['Learn React', 'First App'];
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
};

const Header = () => {
    return <h1>My Todo List</h1>;
};

const Search = () => {
    const SearchText = 'search';
    const SearchStyle = {
        fontSize: 25
    };
    return <input type="text" style={SearchStyle} placeholder={SearchText} />;
};

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
