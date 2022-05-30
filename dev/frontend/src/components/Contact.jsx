import React from 'react'

export default function Contact() {
    return (
        <div>
            <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                            <h1 className="display-6 text-center mb-4">Have Some <b>Questions ?</b></h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/contactus.png" alt="About" className="w-75 mt-0" />
                        </div>
                        <div className="col-md-6">

                            {/* The contact form function is not implemented */}
                            
                            <form action="">
                            <div className="mb-3">
                                <label for="name" className="form-label">Your Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Your Name"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Your Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5 "></textarea>
                            </div>

                            <button type="submit" className="btn btn-outline-primary rounded-pill">Send Message <i className="fa fa-paper-plane ms-2"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
