const ToDoItem = props => {
	return (
		<div className="item">
			<div onClick={() => props.onTodoSelect(props.todo)}>
				<h4 className="header">{props.todo.title}</h4>
				<p>{props.todo.description}</p>
			</div>
		</div>
	);
};

export default ToDoItem;
