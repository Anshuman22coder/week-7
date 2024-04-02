import { atom } from "recoil";

const CountAtom = atom({
	key: "countAtom", //key should be unique
	default: 0,
});

export default CountAtom;
