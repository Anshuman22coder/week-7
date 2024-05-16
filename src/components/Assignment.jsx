// import { useState } from "react";
import {  useRecoilValue, useSetRecoilState } from "recoil";
import { filteredTodo, inputList } from "../store/atoms/todo";

function TodoAssignment(){  
    
    const setInput= useSetRecoilState(inputList)
    const filteredTodoList= useRecoilValue(filteredTodo)




    return(
        <>
            <input type="text" placeholder="enter the filter words" onChange={(e)=>setInput(e.target.value)}/>

           {filteredTodoList.map((word,index)=>{
            return <div key={index}>
                {word}
            </div>
           
           })}
        </>
    )
}


export default TodoAssignment;