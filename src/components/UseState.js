import React, { useState } from 'react'

function UseState() {
    //let score = 0;

    let[score,setScore]= useState(0);
    let[balls,setBalls]= useState(0);
    let[Single, setSingle]= useState(0);
    let[double, setDouble]= useState(0);
    let[fours, setFours]= useState(0);
    let[sixes, setSixes]= useState(0);
    let[nobe, setNobe]= useState(0);
    let[wickets, setWickets]= useState(0);
    
    return (
    <div>
        <h1>Score:{score}/{wickets}</h1>
        <h1>Overs:{parseInt(balls/6)}.{balls%6}</h1>
        <h1>Single:{Single}</h1>
        <h1>Double:{double}</h1>
        <h1>Fours:{fours}</h1>
        <h1>Sixes:{sixes}</h1>
        <h1>Nobe:{nobe}</h1>
        <h1>Wickets:{wickets}.{10}</h1>


        <button onClick={()=>{
         setScore(score +1);
         setBalls(balls+1);
         setSingle(Single+1)
        }}>Single</button>

<button onClick={()=>{
         setScore(score +2);
         setBalls(balls+1);
         setDouble(double+1);
        }}>Double</button>

        <button onClick={()=>{
         setScore(score +4);
         setBalls(balls+1);
         setFours(fours+1);
        }}>Fours</button>

        <button onClick={()=>{
         setScore(score +6);
         setBalls(balls+1);
         setSixes(sixes+1);
        }}>Sixes</button>

        <button onClick={()=>{
         setScore(score +1);
         
         setNobe(double+1);
        }}>No ball</button>

        <button onClick={()=>{
         //setScore(score +2);
         setBalls(balls+1);
         setWickets(wickets+1);
        }}>Wickets</button>
    </div>
  )
}

export default UseState