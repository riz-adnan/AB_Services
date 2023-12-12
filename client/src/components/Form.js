import React,{useState,useContext} from 'react'
import Layout from '../layout/Layout'
import Contexts from '../context/Contexts';
const Form = () => {
    const context = useContext(Contexts);
    const {postcall} = context;
    
    
    const [call, setCall] = useState({name: "", phone: "", location: "",service:"",requirements:"",image:""})

    const handleClick = (e)=>{
        e.preventDefault();
        console.log(call)
        postcall(call.name, call.phone, call.location, call.service,call.requirements,call.image);
       
    }

   

    const onChange = (e)=>{
        setCall({...call, [e.target.name]: e.target.value})
    }
  return (
    <div>
        <Layout>
        <div class="container px-5 my-5 px-5">
    <div class="text-center mb-5">
        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="fa fa-envelope"></i></div>
        <h2 class="fw-bolder">Book a Service</h2>
        <p class="lead mb-0">Book a service at as low price as Rs. 250</p>
    </div>
    <div class="row gx-5 justify-content-center">
        <div class="col-lg-6">
         
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              
                <div class="form-floating mb-3">
                    <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" name="name" value={call.name} onChange={onChange} />
                    <label for="name">Full name</label>
                    <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                </div>
            
               
               
                <div class="form-floating mb-3">
                    <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" name="phone" value={call.phone} onChange={onChange}/>
                    <label for="phone">Phone number</label>
                    <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                </div>

                <div class="form-floating mb-3">
                    <input class="form-control" id="address" type="text" placeholder="Enter your address..." data-sb-validations="required" name="location" value={call.location} onChange={onChange} />
                    <label for="name">Address</label>
                    <div class="invalid-feedback" data-sb-feedback="name:required">An address is required.</div>
                </div>
            
                <div class="form-floating mb-4">
                <select name="service" id="serviceselect" class="form-control" value={call.service} onChange={onChange}>
                    <option value="paint">Paint</option>
                    <option value="bath">Bath Fittings</option>
                    <option value="ceiling">False Ceiling</option>
                    <option value="carpent">Carpentry</option>
                </select>
                <label for="serviceselect">Select your Service:</label>
            </div>


                <div class="form-floating mb-3">
                    <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..."  data-sb-validations="required" name="requirements" value={call.requirements} onChange={onChange} ></textarea>
                    <label for="message">Describe Problem</label>
                    <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                </div>
                <div class="form-floating mb-3">
                    <input class="form-control" type="file" name='image' value={call.image} onChange={onChange}/>
                </div>
                
               
                <div class="d-none" id="submitSuccessMessage">
                    <div class="text-center mb-3">
                        <div class="fw-bolder">Form submission successful!</div>
                        To activate this form, sign up at
                        <br />
                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                    </div>
                </div>
               
                <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
               
                <div class="d-grid"><button class="btn btn-primary " id="submitButton" type="submit" onClick={handleClick}>Submit</button></div>
            </form>
        </div>
    </div>
</div></Layout></div>
  )
}

export default Form