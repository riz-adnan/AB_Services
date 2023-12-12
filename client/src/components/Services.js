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
                        <h2>What I Do</h2>
                        <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites</p>
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
                            <h5>Unique design</h5>
                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
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
                            <h5>Different Layout</h5>
                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
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
                            <h5>Make it Simple</h5>
                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
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
                            <h5>Responsiveness</h5>
                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
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
                            <h5>Testing for Perfection</h5>
                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
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
                            <h5>Advanced Options</h5>
                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
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