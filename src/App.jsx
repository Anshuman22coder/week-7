
// import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
// import { countAtom, evenSelector } from "./store/atoms/count";

// function App() {
//   return (
//     <div>
//       <RecoilRoot>
//         <Count />
//       </RecoilRoot>
//     </div>
//   )
// }

// function Count() {
//   console.log("re-render");
//   return <div>
//     <CountRenderer />
//     <Buttons />
//   </div>
// }

// function CountRenderer() {
//   const count = useRecoilValue(countAtom);
  
//   return <div>
//     <b>
//       {count}
//     </b>
//     <EvenCountRenderer />
//   </div>
// }

// function EvenCountRenderer() {
//   const isEven =useRecoilValue(evenSelector);
//   console.log(isEven)

//   return <div>
//     {isEven ? "It is even" : null}
//   </div>
// }

// function Buttons() {
//   const setCount = useSetRecoilState(countAtom);
//   console.log("buttons re-rendererd");

//   return <div>
//     <button onClick={() => {
//       setCount(count => count + 1)
//     }}>Increase</button>

//     <button onClick={() => {
//       setCount(count => count - 1)
//     }}>Decrease</button>
//   </div>
// }

// export default App
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import Assignment from './components/Assignment';
import Profile from "./components/Q1.Profile";
import BackgroundChanger from "./components/Q2.background";
import CustomComponent from "./components/Q3.customR";
import Generatepara from "./components/Q4.generatePara";
import GitHubInfo from "./components/Q5.githubinfo";
import OtpLogin from "./components/Q6.otplogin";
import BirthDayWishCard from "./components/Q7.birthWish";

function App(){

return(
  <RecoilRoot>
     <BrowserRouter >
     <NavBar />
     <Routes>
        <Route path="/"  element={<Assignment />}/> 
        <Route path="/profile"  element={<Profile />}/> 
        <Route path="/backgroundChanger"  element={<BackgroundChanger />}/> 
        <Route path="/reactCustomComponent"  element={<CustomComponent />}/> 
        <Route path="/paraGenerator"  element={<Generatepara />}/> 
        <Route path="/githubInfo"  element={< GitHubInfo/>}/> 
        <Route path="/otpLogin"  element={<OtpLogin />}/> 
        <Route path="/birthWishCard"  element={<BirthDayWishCard />}/> 
      </Routes>
     </BrowserRouter>
  </RecoilRoot>
)
}


function NavBar(){
  const navigate = useNavigate()
  return(
    <div>
      <button onClick={()=> navigate("/")}>wordFilter</button>
      <button onClick={()=> navigate("/profile")}>profile</button>
      <button onClick={()=> navigate("/backgroundChanger")}>BackgroundChanger</button>
      <button onClick={()=> navigate("/reactCustomComponent")}>Custom js</button>
      <button onClick={()=> navigate("/paraGenerator")}>GeneratePara</button>
      <button onClick={()=> navigate("/githubInfo")}>My GitHub</button>
      <button onClick={()=> navigate("/otpLogin")}>otpLogin</button>
      <button onClick={()=> navigate("/birthWishCard")}>BirthDay Wishes</button>

    </div>
  )
}


export default App;