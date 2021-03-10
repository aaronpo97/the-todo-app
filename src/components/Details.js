const Details = props => {
	console.log(props.selectedTodo ? props.selectedTodo : 'none');

	if (!props.selectedTodo) {
		return <h2>Click A Todo Item to see details.</h2>;
	}

	return (
		<div>
			<h2>Details</h2>
			<h1>{props.selectedTodo.title}</h1>
			<p>{props.selectedTodo.description}</p>
		</div>
	);
};

export default Details;
