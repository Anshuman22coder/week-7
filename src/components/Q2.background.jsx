import { useRecoilState } from "recoil";
import { backgroundChanger } from "../store/atoms/allInOne";



function BackgroundChanger(){

const [backgroundChangerColor,setBackgroundChangerColor] = useRecoilState(backgroundChanger);
    console.log(backgroundChanger)
    return(
        <>
           <style>{`body { background-color: ${backgroundChangerColor}; }`}</style>
        <div style={{backgroundColor:'white', boxShadow: '2px solid gray', margin:'4px', padding: '6px', bottom: '0', position: 'absolute'}}>
                <button style={{backgroundColor: 'red'}} onClick={() => {
                    setBackgroundChangerColor('red');
                }}>Red</button>
                <button style={{backgroundColor: 'yellow'}}  onClick={() => {
                    setBackgroundChangerColor('yellow');
                }}>Yellow</button>
                <button style={{backgroundColor: 'black', color: 'white'}}  onClick={() => {
                    setBackgroundChangerColor('black' );
                }}>Black</button>
                <button style={{backgroundColor: 'purple'}}  onClick={() => {
                    setBackgroundChangerColor('purple');
                }}>Purple</button>
                <button  style={{backgroundColor: 'green'}}  onClick={() => {
                    setBackgroundChangerColor('green');
                }}>Green</button>
                <button style={{backgroundColor: 'blue'}}  onClick={() => {
                    setBackgroundChangerColor('blue');
                }}>Blue</button>
                <button  style={{backgroundColor: 'orange'}} onClick={() => {
                    setBackgroundChangerColor('orange');
                }}>Default</button>
            </div>
        </>
    )

}


export default BackgroundChanger;