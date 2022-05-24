import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="footer text-white">
                <div className="container">
                    <div className="py-5">
                        <div className="row">
                            <div className="col-3">
                                <h4>Employee Management System</h4>
                            </div>
                            <div className="col-2">
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">
                                        <a className='nav-link  p-0 text-white'>Home</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a className='nav-link  p-0 text-white'>About</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a className='nav-link  p-0 text-white'>Contact</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a className='nav-link  p-0 text-white'>FAQs</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a className='nav-link  p-0 text-white'>Features</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
