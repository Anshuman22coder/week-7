import { selector } from "recoil";
import { FilterWord, Todos } from "../atoms/todo";

const derivedState = selector({
	key: "filteredDerivedState",
	get: ({ get }) => {
		const value = get(FilterWord);
		const todos = get(Todos);

		if ((value == "") | (value === undefined)) {
			return todos;
		}

		const filteredTodos = todos.filter((todo) => todo.title.includes(value));
		return filteredTodos;
	},
});

export default derivedState;
