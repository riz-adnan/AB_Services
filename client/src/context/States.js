
import Contexts from "./Contexts"
import { useState } from "react"



const States = (props) => {
    const [customers,setcust] = useState([])
const [calls,setcalls]=useState([])

const getcalls = async () => {
    const response = await fetch("http://localhost:5000/api/service/getcalls", {
        method: "GET",
        headers: {
            "auth-token": localStorage.getItem('token'), 
            "Content-Type": "application/json"
        },
    })
    const json = await response.json()
    console.log(json)
    setcalls(json)
}
const getcustomer = async () => {
    const response = await fetch("http://localhost:5000/api/service/getcustomer", {
        method: "GET",
        headers: {
            "auth-token": localStorage.getItem('token'),
            "Content-Type": "application/json"
        },
    })
    const json = await response.json()
    console.log(json)
    setcust(json)
}

const postcall = async (name, phone, location, service,requirement,image) => {
    const response = await fetch("http://localhost:5000/api/service/addcall", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, phone, location, service,requirement,image})
    })
    const json = await response.json()
    console.log(json)
    calls.concat(json.call)
    customers.concat(json.customer)
    console.log(calls)
    console.log(customers)
    

}
return (
    <Contexts.Provider value={{postcall,calls,customers,getcalls,getcustomer}}>
      {props.children}
    </Contexts.Provider>
  )

}
export default States;
