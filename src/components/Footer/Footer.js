import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


export default function Footer() {
    return (
        <div className='w-100 bg-img-footer pb-4 footer'>
            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-5 pb-3 my-5 border-top mb-0">
                    <div className="col firstcol ">
                        <h4>T-shirt Printing Site</h4>
                        <p>industryLoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        {/* <p className="text-body-secondary">&copy; 2024</p> */}
                    </div>

                    <div className="col ">
                        <h5>Follow Us</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">FaceBook(Meta)</Link></li>
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Instagram</Link></li>
                            <li className="nav-item pb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Twitter(X)</Link></li>

                        </ul>
                    </div>

                    <div className="col ">
                        <h5>Links</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Shirt-printing</Link></li>
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Badge printing</Link></li>
                            <li className="nav-item pb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Membership</Link></li>

                        </ul>
                    </div>

                    <div className="col pb-2">
                        <h5>Contact Us</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="mailto:booking@gmail.com" className="nav-link p-0 text-body-secondary">booking@gmail.com</a></li>
                            <li className="nav-item mb-2"><a href="tel:+919766426214" className="nav-link p-0 text-body-secondary">+91 9766426214</a></li>
                            <li className="nav-item pb-2"><a href="/" className="nav-link p-0 text-body-secondary">Pune</a></li>
                        </ul>

                    </div>


                </footer>

                <div className=" offset-md-1  mx-auto">
                    <form className='w-75 gap-2 flex-sm-row mx-auto gap-2'>
                        <div className='d-flex flex-column flex-sm-row  gap-2'>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                        </div>
                        <div className="d-flex flex-column flex-sm-row  gap-2">
                            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                            <button className="btn btn-info" type="button" fdprocessedid="6bvxu">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
