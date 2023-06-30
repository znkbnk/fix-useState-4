

import React, { useState } from 'react-router-dom';

function Form() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState(); 

  function handleNameChange(e) {
    (e.target.value); 
  }

  function handleEmailChange(e) {
    setEmail(); 
  }

  function handleMessageChange() { 
    setMessage(e.target.value); 
  }

  function handleSubmit(e) {   
    console.log('Form submitted:', { name, email, message });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>       
        <label>
          Name:          
          <input type="text" value={name} />
        </label>

        <label>
          Email:         
          <input id="email" type="email" value={email} onChange={handleNameChange} />
        <label>  

        <label htmlFor="message">
          Message:
          <textarea id="message" value={message} onChange={handleMessageChange} />
        </label>  

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
