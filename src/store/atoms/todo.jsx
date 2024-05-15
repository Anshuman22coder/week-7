import { atom, selector } from "recoil";

const words = ['hii', 'my', 'name', 'is', 'Rajan', 'I', 'am', 'in', 'second', 'year'];


const TOTAL_LINES = 1000;
const ALL_WORDS = [];
for(let i=0;i<TOTAL_LINES; i++){
    let sentence ='';
    for(let j=0;j<words.length;j++){
        sentence  += (words[Math.floor(words.length*Math.random())]);
        sentence +=' ';
    }
    ALL_WORDS.push(sentence);
}


export const todo =atom({
    key:"todo",
    default: ALL_WORDS
})

export const inputList = atom ({
    key:"input",
    default:'',
})


export const filteredTodo = selector({
    key: "filterTodo",
    get: ({get})=>{
        const input = get(inputList);
        const sentence = get(todo);
        
        return sentence.filter(sentence => sentence.includes(input))
        
    }
})