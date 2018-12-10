import React from 'react';

import  './style.css';

import TodoListItem from '../TodoListItem';

//деструктурируем данные из массива
const TodoList = ({ data }) => {
    // массив элементов списка
    const elements = data.map(item => {
			  // разворачиваем объект и присваиваем значение id из объекта, а остальные свойства передаём в itemProps
        const { id, ...itemProps } = item;
        return (
            <li key={id} className='list-group-item'>
                {/* <TodoListItem label={item.label} important={item.important} /> */}
                {/* через spread оператор разворачиваем объект */}
                <TodoListItem {...itemProps} />
            </li>
        );
    });
    return <ul className= 'list-group todo-list'>{elements}</ul>;
};

export default TodoList;
