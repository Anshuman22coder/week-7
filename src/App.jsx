import "./App.css";

import { RecoilRoot } from "recoil";
import GithubProfile from "./components/Assgmnt5_GithubProfileCard/GithubProfile";

//we can get the value of the selector function by using the useRecoilValue
//useRecoilValue can take either an atom or the selector to return the value

function App() {
	return (
		<RecoilRoot>
			<div id="appContainer">
				<GithubProfile />
			</div>
		</RecoilRoot>
	);
}

export default App;
