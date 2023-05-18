import React from "react";
import { useState } from "react";

export default function Login() {

    let [change,setchange] = useState("")
    let username = ""
    let password = ""
    function loginID(e) {
        username = e.target.value
        console.log(username)

        // let collectP = e.target.value
        // console.log(collectP)

    }
    function pass(e) {
        password = e.target.value
        console.log(password)
    }
    function SubmitEvent() {
        let flag=false
        let arr = [{ uname: "xxx", password: "123" },
        { uname: "rrr", password: "13" },
        { uname: "xeex", password: "23" },]

        // let username = document.getElementById("h1").value
        // console.log(username)
        // let password = document.getElementById("h2").value
        for (let i of arr) {
            if (i.uname == username && i.password == password) {
                flag=true;
                break
            }
        }
        if (flag) {
            setchange("Welcome")
        }
        else {
            setchange("Not a user")
        }

    }

    return (
        <form>
        <div>
            <h3>Welcome to the Page</h3>
            <br></br>


            <label htmlFor="h1">User ID: </label>
            <input type="text" id="h1" onBlur={loginID}></input>

            <br></br>

            <label htmlFor="h2">Password: </label>
            <input type="text" id="h2" onBlur={pass}></input>

            <br></br>

            <input type="button" onClick={SubmitEvent} value="Check"></input>


            <p id="p1">{change} </p>

        </div>
        </form>
    )
}