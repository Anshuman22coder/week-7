import "./App.css";

import { RecoilRoot } from "recoil";
import Birthday from "./components/Assgmnt7_BirthdayCards/Birthday";

//we can get the value of the selector function by using the useRecoilValue
//useRecoilValue can take either an atom or the selector to return the value

function App() {
	return (
		<RecoilRoot>
			<Birthday />
		</RecoilRoot>
	);
}

export default App;
