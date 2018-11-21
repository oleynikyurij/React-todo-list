import React from 'react';

import TodoListItem from './TodoListItem';

const TodoList = () => {
    // const items = ['Learn React', 'First App'];
    return (
        <ul>
            <li>
                <TodoListItem label="Learn React" />
            </li>
            <li>
                <TodoListItem label="First App" important />
            </li>
            <li>
                <TodoListItem label="Drink Coffee" />
            </li>
        </ul>
    );
};

export default TodoList;
