import {  useRecoilState } from "recoil";
import { paraGenerator } from "../store/atoms/allInOne";


function Generatepara(){
const [input,setInput] = useRecoilState(paraGenerator);

// const handleChange = (e)=>{
//     setInput({
//         ...setInput,
//         input: e.target.value
//     })
// }

function generateRamdomWord (){
    if (isNaN(input) || input <= 0) {
        return "Please enter a valid positive number.";
    }
const word = ['hii', 'you', 'have', 'generated', 'this', 'paragraph', 'congratulation','yeah'];
let paragraph = '';

for(let i =1; i<=input; i++){
   const randomIndex = Math.floor( Math.random()* word.length);
   const paraword = word[randomIndex];

    paragraph= paragraph + paraword + ' ';
    if ((i + 1) % 15 === 0) {
        // Add a line break after every 10 words
        paragraph += ".";
    }
}

return paragraph;

}
    return(
        <>
            <input type="text" placeholder="enter the no. of word you want in the paragraph" onChange={(e)=> setInput(e.target.value)}/>

            <div>{generateRamdomWord()}</div>
        </>
    )

}

export default Generatepara;