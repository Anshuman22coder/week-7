import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import TodoItem, { Todos, FilterWord } from "../../store/atoms/todo";

import derivedState from "../../store/selector/derviedState";

import styles from "./todo.module.css";

function Todo() {
	return (
		<div>
			<TItem />
			<DisplayTodoItems />
		</div>
	);
}

export default Todo;

function TItem() {
	const [todoItem, setTodoItem] = useRecoilState(TodoItem);
	const [todos, setTodos] = useRecoilState(Todos);
	const [filter, setFilter] = useRecoilState(FilterWord);

	console.log(todos);

	const Ref = React.useRef(null);

	function handleFilter(e) {
		setFilter(e.target.value);
	}

	function handleChange(e) {
		const newItem = {
			...todoItem,
			[e.target.name]: e.target.value,
		};
		setTodoItem(newItem);
	}
	function handleAddTodo() {
		setTodos((currentTodos) => [...currentTodos, todoItem]);
		setTodoItem({
			title: "",
			description: "",
		});
		Ref.current.focus();
	}
	return (
		<div className={styles.todoContainer}>
			<div className={styles.inputGroup}>
				<label htmlFor="title">Title:</label>
				<input
					ref={Ref}
					type="text"
					id="title"
					value={todoItem.title}
					name="title"
					onChange={handleChange}
				/>
			</div>
			<div className={styles.inputGroup}>
				<label htmlFor="description">Description:</label>
				<input
					type="text"
					id="description"
					value={todoItem.description}
					name="description"
					onChange={handleChange}
				/>
			</div>

			<button type="button" onClick={handleAddTodo}>
				Add Item to the Todos
			</button>

			<div className={styles.filtering}>
				<input type="text" value={filter} onChange={handleFilter} />
			</div>
		</div>
	);
}

function DisplayTodoItems() {
	const todos = useRecoilValue(derivedState);

	return (
		<div className={styles.todoItemsDisplay}>
			{todos.length > 0 &&
				todos.map((todo) => (
					<div key={todo.title}>
						<p>Title: {todo.title}</p>
						<p>Description: {todo.description}</p>
					</div>
				))}
		</div>
	);
}
