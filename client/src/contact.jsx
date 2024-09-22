/*
// File name: contact.jsx
// Student name: Vu Huy Hoang Son
// Student ID: 301366093
// Date: 21 Sep 2024
*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();  // To navigate to another page

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };
    // Set initial values
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        message: ''
    };
    // State to hold initial values
    const [values, setValues] = useState({initialValues});
    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Navigate to another page with form data
        navigate('/', { state: values });
        console.log(values);//Captured the values to see in the home page
    };
    const handleReset = () => {
        setValues(initialValues);  // Reset state to initial values
    };
    return (
        <div>
            <div className='contact-panel'>
                <button onClick={togglePanel}>
                    Click here for more contact informations
                </button>
                {isOpen && (//if Open, show panel content
                    <div className='panel-content'>
                        <a href="mailto: hvu46@my.centennialcollege.ca">hvu46@my.centennialcollege.ca</a><br></br>
                        <a href="tel:123-466-7890">123-456-7890</a>
                        <p>Student ID: 301366093</p>
                        <p>Ontario, Canada - M1G 3T8</p>
                    </div>
                )}
            </div>
            <div className='contact-form'>
                <h2>Contact Me</h2> 
                <form onSubmit={handleSubmit}> 
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' placeholder='Enter your first name' name='firstName' value={values.firstName } onChange={handleChange} required/>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' placeholder='Enter your last name' name='lastName' value={values.lastName} onChange={handleChange} required/>
                    <label htmlFor='email'>Email Address</label>
                    <input type='email' placeholder='Enter your email address' name='email' value={values.email} onChange={handleChange} required/>
                    <label htmlFor='contactNumber'>Contact Number</label>
                    <input type='text' placeholder='Enter your contact number' name='contactNumber' value={values.contactNumber} onChange={handleChange} required/>
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' id='message' cols="50" rows="15" placeholder='Enter your message' value={values.message} onChange={handleChange}/>
                    <button type="reset" onClick={handleReset} >Reset</button>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
