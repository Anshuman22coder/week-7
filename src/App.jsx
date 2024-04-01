import "./App.css";

import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OtpLogin, {
	OTPINPUTScreen,
} from "./components/Assgmnt6_OTPlogin/OtpLogin";

//we can get the value of the selector function by using the useRecoilValue
//useRecoilValue can take either an atom or the selector to return the value

function App() {
	return (
		<RecoilRoot>
			<Router>
				<Routes>
					<Route path="/" element={<OtpLogin />} />
					<Route path="/otp" element={<OTPINPUTScreen />} />
				</Routes>
			</Router>
		</RecoilRoot>
	);
}

export default App;
