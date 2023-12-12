import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
import './services.css'
import Layout from '../layout/Layout'
const Services = () => {
    const navigate = useNavigate()
  return (
    <div>
        <Layout>
    <section class="section services-section" id="services">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="section-title">
                        <h2>What We Do</h2>
                        <p>We provide solutions to all your home related problems. Our services ranges from painting to furniture.</p>
                    </div>
                </div>
            </div>
            <div class="row">
             
                <div class="col-sm-6 col-lg-4" >
                    <div class="feature-box-1" >
                        <div class="icon">
                            <i class="fa fa-desktop"></i>
                        </div>
                        <div class="feature-content">
                            <h5>Furniture</h5>
                            <p>We design and create best furnitures for customers of all sizes, specializing in creating stylish, modern sofas.</p>
                            <Link to="/form" className='link-info' >Book a Call</Link>
                        </div>
                    </div>
                </div>
               
                <div class="col-sm-6 col-lg-4">
                    <div class="feature-box-1">
                        <div class="icon">
                            <i class="fa fa-user"></i>
                        </div>
                        <div class="feature-content">
                            <h5>Bath Fittings</h5>
                            <p>We design and handcraft best and budget friendly bath fittings for our customers, available in all sizes.</p>
                            <Link to="/form" className='link-info' >Book a Call</Link>
                        </div>
                    </div>
                </div>
             
                <div class="col-sm-6 col-lg-4">
                    <div class="feature-box-1">
                        <div class="icon">
                            <i class="fa fa-comment"></i>
                        </div>
                        <div class="feature-content">
                            <h5>Paint</h5>
                            <p>We paint the dreams of our customers on the wall providing full consultancy help to them.</p>
                            <Link to="/form" className='link-info' >Book a Call</Link>
                        </div>
                    </div>
                </div>
             
                <div class="col-sm-6 col-lg-4">
                    <div class="feature-box-1">
                        <div class="icon">
                            <i class="fa fa-image"></i>
                        </div>
                        <div class="feature-content">
                            <h5>False Ceiling</h5>
                            <p>We specialize in creating best designed false ceilig for our customers</p>
                            <Link to="/form" className='link-info' >Book a Call</Link>
                        </div>
                    </div>
                </div>
               
                <div class="col-sm-6 col-lg-4">
                    <div class="feature-box-1">
                        <div class="icon">
                            <i class="fa fa-th"></i>
                        </div>
                        <div class="feature-content">
                            <h5>Electric Fittings</h5>
                            <p>Leave the circuits to us! . We specialize in managing the full circuits of the house.</p>
                            <Link to="/form" className='link-info' >Book a Call</Link>
                        </div>
                    </div>
                </div>
               
                <div class="col-sm-6 col-lg-4">
                    <div class="feature-box-1">
                        <div class="icon">
                            <i class="fa fa-cog"></i>
                        </div>
                        <div class="feature-content">
                            <h5>Pest Control </h5>
                            <p>Specialize in pest control. Book a call.</p>
                            <Link to="/form" className='link-info' >Book a Call</Link>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
    </Layout></div>
  )
}

export default Services