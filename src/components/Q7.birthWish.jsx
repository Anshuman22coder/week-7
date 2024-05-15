/* eslint-disable react/prop-types */

import { useRecoilState } from "recoil";
import { wishCard } from "./wishCard.js";
import { useState } from "react";
import { birthDayWishesAtom } from "../store/atoms/allInOne.jsx";

function BirthDayWishCard(){

    const [showCard, setShowCard] =useState(false)
    const [name, setname] = useRecoilState(birthDayWishesAtom)

    return(

        <>
           {!showCard? <div><h2>Enter your name</h2><input type="text" placeholder="enter your name" onChange={(e)=> setname(e.target.value)}/><button onClick={() => setShowCard(true)}>
            Done
            </button></div> : <BirthDayCard name ={name} />
    }
        </>
    )
}


function BirthDayCard ({name}){
    return(
        <>
        <h2>`Happy birthDay {name}`</h2>
           {
            wishCard.map((wishCard)=>{
                return (
                    <div key={wishCard.id} style={{backgroundColor: 'grey', color:'white',
                        border:'2px solid black', margin:'4px', padding:'10px', width:'150px', height:'150px'
            
                    }}>{wishCard.description}</div>
                )
            })
           }
        </>
    )
}


export default BirthDayWishCard;