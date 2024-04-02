import { atom, selector } from "recoil";

export const atomNumber = atom({
	key: "atomStateNumber",
	default: 0,
});

const words = [
	"loreum",
	"ispesum",
	"knights",
	"arsenal",
	"london",
	"starlights",
	"skills",
	"success",
];

export const derivedState = selector({
	key: "pargraph_generator",
	get: ({ get }) => {
		const number = get(atomNumber);
		let sentence = ``;
		for (let i = 0; i < number; i++) {
			const word = words[Math.floor(Math.random() * words.length)];
			sentence += word + " ";
		}
		return sentence;
	},
});
