import React,{useContext, useEffect} from 'react'
import Contexts from '../context/Contexts'
import Layout from '../layout/Layout'
import Callcard from './Callcard'
import Custcard from './Custcard'
const Adminpage = () => {

  const context=useContext(Contexts)
  const {getcalls,calls,getcustomer,customers}=context
  console.log(calls )
  useEffect (()=>{  
    getcalls()
    getcustomer()
  },[])
  return (
    <div>
      <Layout>
        <h2> Calls </h2>
      <div className="row my-3">
                <div className="container mx-2"> 
                {calls.length===0 && 'No Calls to display'}
                <div class="container text-center">
                <div class="row row-cols-md-3 row-cols-1">
                {calls.map((p) => {
                    return <Callcard key={calls._id}  calls={p} />
                })}
            </div>
            </div>
            </div>
            </div>
            <h2> Customers </h2>  
            <div className="row my-3">
                <div className="container mx-2"> 
                {customers.length===0 && 'No Customer to display'}
                <div class="container text-center">
                <div class="row row-cols-md-3 row-cols-1">
                {customers.map((p) => {
                    return <Custcard key={customers._id}  customers={p} />
                })}
            </div>
            </div>
            </div>
            </div>
      </Layout>
    </div>
  )
}

export default Adminpage