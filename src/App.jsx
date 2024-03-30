import "./App.css";

import { RecoilRoot } from "recoil";
import Paragraph from "./components/Assgmnt4_ParagraphGenerator/Paragraph";

//we can get the value of the selector function by using the useRecoilValue
//useRecoilValue can take either an atom or the selector to return the value

function App() {
	return (
		<RecoilRoot>
			<div id="appContainer">
				<Paragraph />
			</div>
		</RecoilRoot>
	);
}	

export default App;
