import { useState } from "react"

export default function Case(){

    let collect = ""
    let [change,setchange] = useState("")

    function f4(e){
        collect = e.target.value
    }

    function f1(e)
    {
        let d = document.getElementById("n1").value
        if(e.target.checked){
            setchange(d.toUpperCase())
            console.log(collect.toUpperCase())
        }
        // document.getElementById("l1").innerText = v.toUpperCase()        
    }

    function f2(e)
    {
        let d = document.getElementById("n1").value
        if(e.target.checked){
            setchange(d.toLowerCase())
            console.log(collect.toLowerCase())
        }
        // document.getElementById("l2").innerText = v.toLowerCase()
    }

    function f3(e) {
        let d = document.getElementById("n1")
        let v = d.value
        var sentence = v.toLowerCase().split(" ");
        for(var i = 0; i< sentence.length; i++){
            if(sentence[i]==""){
                continue;
            }
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
     }
    // let z = document.write(sentence.join(" "));
     let z = (sentence.concat().join(" ")) //This fails for more than 2 spaces between the words to overcome that, we use a if condition as written above.
    // document.getElementById("l3").innerText=z;
    // return sentence;
    setchange(z)
    collect = z
    }


    return(
        <pre>
        <input type="text" id="n1" onBlur={f4} />
        <p id="l1"> {change} </p>
        <label htmlFor="h1">Uppercase</label>
        <input id="h1" type="radio" onChange={f1} value="uppercase" name="c" />

        <p id="l2"> </p>
        <label htmlFor="h2">Lowercase</label>
        <input id="h2" type="radio" onChange={f2} name="c" />
       
        <p id="l3"> </p>
        <label htmlFor="h3">Titlecase</label>
        <input id="h3" type="radio" onChange={f3} name="c"/>
    </pre>
    )
}