import { atom } from "recoil";

const TodoItem = atom({
	key: "todoItem",
	default: {
		title: "",
		description: "",
	},
});

export const Todos = atom({
	key: "todos",
	default: [],
});

export const FilterWord = atom({
	key: "todoFilter",
	default: "",
});

export default TodoItem;
