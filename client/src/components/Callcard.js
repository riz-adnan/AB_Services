import React, { useContext } from 'react'

import {Link} from 'react-router-dom'


const Callcard = (props) => {
  const {calls}=props;
  const mystyle={
    "width":"20rem",
    "height":"24em",
    "margin-top":"5em"
  }
console.log(calls)
var base64Image = null;
if (calls.image && calls.image.toString) {
     base64Image = calls.image.toString('base64');
    
  } else {
 base64Image = calls.image;  }
  console.log(base64Image)
  return (
    <div>
       <div class="card" style={mystyle}>
       <img
          src={`data:image/jpeg;base64,${base64Image}`}
          className="card-img-top"
          alt="..."
          id="changeheight"
        />
  <div class="card-body">
    <h5 class="card-title">{calls.name}</h5>
    <p class="card-text">{calls.location}</p>
    <p class="card-text"> {calls.service}</p>
    <p class="card-text">{calls.requirement}</p>
    <p class="card-text">{calls.phone}</p>
    

    
  </div>
</div>
    </div>
  )
}

export default Callcard