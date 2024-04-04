// Filename - Form.js 

import React, { useState } from 'react';
const Home = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "", // No default value for email
    password: "" // No default value for password
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(previousState => ({
      ...previousState,
      [name]: value
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = 'http://localhost:5000/post';
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers you need, such as authorization headers
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Handle successful response here if needed
      return response.json(); // or response.text() if expecting text response
    })
    .then(data => {
      // Handle response data here
      console.log(data);
    })
    .catch(error => {
      // Handle error here
      console.error('There was a problem with the fetch operation:', error);
    });
  }

  return (
    <div className='b'>
      <h1> Please enter your login and password!</h1>
      <form className='form-login' onSubmit={handleSubmit}>
        <div>
          <label>FirstName:</label>
          <input type='text' name='firstname' onChange={handleChange} />
        </div><br/>
        <div>
          <label>LastName:</label>
          <input type='text' name='lastname' onChange={handleChange} />
        </div><br/>
        <div>
          <label>Email:</label>
          <input type='text' name='email' onChange={handleChange} />
        </div>
        <br/>
        <div>
          <label>Password:</label>
          <input type='password' name='password' onChange={handleChange} />
        </div>
        <br/>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Home;