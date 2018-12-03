import React from 'react';

const Header = ({toDo, done}) => {
    return (
		<div>
			<h1>My Todo List</h1>
			<h2>{toDo} more to do, {done} done</h2>
		</div>
		);
};

export default Header;
