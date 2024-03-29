import { selector } from "recoil";
import CountAtom from "../atoms/count";

const CountIsEven = selector({
	key: "CountIsEven",

	get: ({ get }) => {
		const count = get(CountAtom);

		return count % 2 == 0 ? true : false;
	},
});

export default CountIsEven;
