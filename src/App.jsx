import "./App.css";
import BackGchanger from "./components/Assgmnt2BackgroundChanger/BackGchanger";

import { RecoilRoot } from "recoil";

//we can get the value of the selector function by using the useRecoilValue
//useRecoilValue can take either an atom or the selector to return the value

function App() {
	return (
		<RecoilRoot>
			<div id="appContainer">
				<BackGchanger />
			</div>
		</RecoilRoot>
	);
}

export default App;
