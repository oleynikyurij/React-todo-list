import React from 'react';

import TodoListItem from '../TodoListItem';

//деструктурируем данные из массива
const TodoList = ({ data }) => {
    // массив элементов списка
    const elements = data.map(item => {
			  // разворачиваем объект и присваиваем значение id из объекта, а остальные свойства передаём в itemProps
        const { id, ...itemProps } = item;
        return (
            <li key={id}>
                {/* <TodoListItem label={item.label} important={item.important} /> */}
                {/* через spread оператор разворачиваем объект */}
                <TodoListItem {...itemProps} />
            </li>
        );
    });
    return <ul>{elements}</ul>;
};

export default TodoList;
