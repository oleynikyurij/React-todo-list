import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import './theme/init.css';

import Header from './components/Header';
import Search from './components/Search';
import TodoList from './components/TodoList';

const App = () => {
    const time = new Date().toString();
    //начальные значения списка
    const dataСollection = [
        { label: 'Learn React', important: false, id: 1 },
        { label: 'First App', important: true, id: 2 },
        { label: 'Drink Coffee', important: false, id: 3 }
    ];


ReactDOM.render(<App />, document.getElementById('root'));
