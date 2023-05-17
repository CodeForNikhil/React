import { Component } from "react";

export default class Factorial extends Component
{
    constructor(props)
    {
        super(props)
        this.a = props.num1
    }
    calcfact()
    {
        let fact = 1;
        for(let i = 1; i<=this.a;i++){
            fact*=i
        }
        return fact
    }
    render(){
        return <div>
            <p>Factorial is : {this.calcfact()}</p>
        </div>
    }
}