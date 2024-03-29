import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import CountAtom from "./store/atoms/count";
import CountIsEven from "./store/selector/countIsEven";
import Profile from "./components/ProfileAssnt1/Profile";

//we can get the value of the selector function by using the useRecoilValue
//useRecoilValue can take either an atom or the selector to return the value

function App() {
	CountIsEven;
	return (
		<div>
			<RecoilRoot>
				<Count />
				<br />
				<Profile />
			</RecoilRoot>
		</div>
	);
}

function Count() {
	return (
		<div style={{ marginBottom: "3rem" }}>
			<CountRenderer />
			<Buttons />
		</div>
	);
}

function CountRenderer() {
	const count = useRecoilValue(CountAtom);
	const countEven = useRecoilValue(CountIsEven);
	return (
		<div>
			<b>{count}</b>
			{countEven && <EvenCountRenderer />}
		</div>
	);
}

function EvenCountRenderer() {
	return <> The count is now even</>;
}

function Buttons() {
	const setCount = useSetRecoilState(CountAtom);
	return (
		<div>
			<button
				onClick={() => {
					setCount((count) => count + 1);
				}}
			>
				Increase
			</button>

			<button
				onClick={() => {
					setCount((count) => count - 1);
				}}
			>
				Decrease
			</button>
		</div>
	);
}

export default App;
