import React from 'react';

import TodoListItem from './TodoListItem';

//деструктурируем данные из массива
const TodoList = ({ data }) => {
    // const items = ['Learn React', 'First App'];
    return (
        <ul>
            <li>
                <TodoListItem
                    label={data[0].label}
                    important={data[0].important}
                />
            </li>
            <li>
                <TodoListItem
                    label={data[1].label}
                    important={data[1].important}
                />
            </li>
            <li>
                <TodoListItem
                    label={data[2].label}
                    important={data[2].important}
                />
            </li>
        </ul>
    );
};

export default TodoList;
