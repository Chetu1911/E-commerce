import React from 'react'
import "./Contact.css";
import Navbar from '../../components/Navbar/Navbar';

function Contact() {
    return (
        <div>
            <Navbar/>

            <p className='title '>CONTACT US</p>
            <p className='title-text'>Our team of customer care ninjas is ready to hear from you.</p>
            <hr></hr>

            <div class="col-5 text-start">
                <p className="heading"> Reach out to us!</p>
                <p className="description">Ready to hear from You💌</p>

                <div>
                    <form className='form'>

                        <input type='text' placeholder='Enter your name' className='input-1 rounded' ></input>


                        <input type='text' placeholder='Enter your email' className='input-2 rounded' ></input>

=
                        <input type='text' placeholder='Enter your contact no' className='input-3 rounded' ></input>


                        <input type='text' placeholder='Enter your message' className='input-4 rounded' ></input><br></br>
                        <button type="button" class="btn btn-outline-info btn-md mt-3">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact
