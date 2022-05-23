import React from 'react'

export default function About() {
    return (
        <div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/about.png" alt="About" className="w-75 mt-0" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">About Us</h3>
                            <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                            <hr className='w-50' />
                            <p className="lead mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius atque, eum officiis porro excepturi reprehenderit doloremque aspernatur saepe sed magni dolorum dolores eos quasi ullam maxime blanditiis nulla tempora rerum ab incidunt fugiat asperiores! Odio vel inventore eaque, veniam assumenda distinctio explicabo veritatis incidunt sequi optio? Delectus repellat at impedit! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla molestias autem saepe nam tenetur magnam blanditiis assumenda voluptate repellat, cumque nemo suscipit mollitia sit natus laudantium necessitatibus non corporis quaerat?</p>
                            <button className="btn btn-primary rounded-pill px-4 py-2">Get Strated</button>
                            <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
