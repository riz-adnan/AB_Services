import React from 'react'
import Layout from '../layout/Layout' 
import './about.css' 
const Contact = () => {
  return (
    <div>
        <Layout>
        <div className="container-fluid">
            <div className="row my-5">
                <div className="col my-5 ">
                <p>
                    <h1 className='aboutus-title'>CONTACT US</h1>
                    <h3 className='aboutus-text'>AB Services</h3>
                    <h4 className='aboutus-text'>Address: Rajendra Prasad Nagar, MIG2, 40 Korba</h4>
                    <h4 className='aboutus-text'>Phone: +91 9244187783 (Customer Care )</h4>
                    <h4 className='aboutus-text'>Phone: +91 8817034168 (Work)</h4>
                    <h4 className='aboutus-text'>Email: abservices283@gmail.com </h4>
                </p>
            </div>
            

            <div className="col">
                
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3689.8244827890217!2d82.7237787594878!3d22.360255240720537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1702293969508!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


            <p className="aboutus-text mt-3">Website developed by Adnan. <b>For Contact: +91 7080995469</b></p>
            </div>
            </div>
        </div>
        </Layout>
    </div>
  )
}

export default Contact