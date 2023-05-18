import { useState } from "react"

export default function Fromview(){
    let [textvalue,setText]=useState("")
    let [u,setupper]=useState()

function inputhandler(e)
{
    setText(e.target.value)
    console.log("you entered =>",textvalue)
}

function ucase(e)
{
    if(e.target.checked)
    setupper(textvalue.toUpperCase())
    else
    setupper(textvalue)
}

function lcase(e)
{
    if(e.target.checked)
    setupper(textvalue.toLowerCase())
    else
    setupper(textvalue)
}


return(
    <div>
       <input type="text" onBlur={inputhandler} ></input> <br></br>
      Uppercase: <input type="radio" onClick={ucase} name="n"></input>
      <br></br>
      Lowercase: <input type="radio" onClick={lcase} name="n"></input>
      <br></br>
     <p>Uppercase= {u} </p>
    </div>
)
}
