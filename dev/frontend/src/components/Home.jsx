import React from 'react'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Services from './Services'

export default function Home() {
    return (
        <div>
            <Navbar/>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">Feels the Fresh Business Perspective</h1>
                            <p className="lead text-center fs-4 mb-5 text-white">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iure ab odio molestiae numquam ea autem placeat exercitationem. Dolorum architecto rerum aliquid molestiae natus quaerat corporis omnis eligendi repudiandae et.
                            </p>
                            <div className="button d-flex justify-content-center">
                                <button className="btn btn-light me-4 rounded-pill px-4 py-2">
                                    Get Quote</button>
                                <button className="btn btn-outline-light me-4 rounded-pill px-4 py-2">
                                    Our Services</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About/>
            <Services/>
            <Contact/>
        </div>
    )
}
