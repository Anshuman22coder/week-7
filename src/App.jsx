import {
	RecoilRoot,
	useRecoilState,
	useRecoilValue,
	useSetRecoilState,
} from "recoil";
import CountAtom from "./store/atoms/count";

function App() {
	return (
		<div>
			<RecoilRoot>
				<Count />
			</RecoilRoot>
		</div>
	);
}

function Count() {
	return (
		<div>
			<CountRenderer />
			<Buttons />
		</div>
	);
}

function CountRenderer() {
	const count = useRecoilValue(CountAtom);
	return (
		<div>
			<b>{count}</b>
			{/* <EvenCountRenderer /> */}
		</div>
	);
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
