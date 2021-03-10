import React from 'react';
import Details from './Details';
import ToDoList from './ToDoList';

class App extends React.Component {
	state = { todos: [], selectedTodo: null };

	componentDidMount = async () => {
		const response = await fetch('https://api.mocki.io/v1/5c2ec4d5');
		const items = await response.json();

		this.setState({ todos: items, selectedTodo: null });
	};
	onTodoSelect = todo => {
		this.setState({ selectedTodo: todo });
	};

	render() {
		return (
			<div className="ui container">
				<div className="ui row">
					<div className="ui grid">
						<div className="ten wide column sticky">
							<Details selectedTodo={this.state.selectedTodo} />
						</div>
						<div className="six wide column">
							<ToDoList todos={this.state.todos} onTodoSelect={this.onTodoSelect} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
