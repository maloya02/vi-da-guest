import React, { useState } from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBValidation, MDBValidationItem } from 'mdb-react-ui-kit';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('subject', subject);
    formData.append('message', message);

    fetch('https://api.slapform.com/H6naVJ70u', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {
          // Handle successful form submission
          console.log('Form submitted successfully');
          // Reset the form fields
          setName('');
          setEmail('');
          setPhoneNumber('');
          setSubject('');
          setMessage('');
        } else {
          // Handle form submission error
          console.error('Form submission failed');
        }
      })
      .catch(error => {
        // Handle fetch error
        console.error('Error occurred while submitting the form', error);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <MDBValidation method='POST' action="https://api.slapform.com/H6naVJ70u" noValidate id='form' className='text-center' style={{ width: '100%', maxWidth: '500px' }}>
        <h2>Book Now</h2>

        <MDBValidationItem invalid feedback='Please provide your name.'>
          <MDBInput label='Name' value={name} onChange={(e) => setName(e.target.value)} wrapperClass='mb-4' required />
        </MDBValidationItem>

        <MDBValidationItem invalid feedback='Please provide your email.'>
          <MDBInput type='email' label='Email address' value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' required />
        </MDBValidationItem>

        <MDBValidationItem invalid feedback='Please provide your phone number.'>
          <MDBInput type='tel' label='Phone number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} wrapperClass='mb-4' required />
        </MDBValidationItem>

        <MDBValidationItem invalid feedback='Please provide mail subject.'>
          <MDBInput label='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} wrapperClass='mb-4' required />
        </MDBValidationItem>

        <MDBValidationItem invalid feedback='Please provide a message text.'>
          <textarea className='form-control' rows='8' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </MDBValidationItem>

        <MDBValidationItem feedback=''>
          <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />
        </MDBValidationItem>

        <MDBBtn type='submit' color='primary' block className='my-4' style={{ background: 'linear-gradient(180deg, #086a87 35.54%, #75dbd9 164.66%)' }} onClick={handleSubmit}>
          Send
        </MDBBtn>
      </MDBValidation>
    </div>
  );
};

export default Contact;
