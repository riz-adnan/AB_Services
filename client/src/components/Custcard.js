import React, { useContext } from 'react'

import {Link} from 'react-router-dom'

const Custcard = (props) => {
  const {customers}=props;
  const mystyle={
    "width":"20rem",
    "height":"24em",
    "margin-top":"5em"
  }


  
  return (
    <div>
       <div class="card" style={mystyle}>
       
  
  <div class="card-body">
    <h5 class="card-title">{customers.name}</h5>
    <p class="card-text">{customers.location}</p>

    <p class="card-text"> {customers.service}</p>
    
    <p class="card-text">{customers.phone}</p>
    

    
  </div>
</div>
    </div>
  )
}

export default Custcard