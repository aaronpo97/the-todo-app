import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, onTodoSelect }) => {
	const renderedList = todos.map(todo => <ToDoItem onTodoSelect={onTodoSelect} todo={todo} />);

	return (
		<div className="ui relaxed divide list">
			<h2>To Do List</h2>
			{renderedList}
		</div>
	);
};

export default ToDoList;
