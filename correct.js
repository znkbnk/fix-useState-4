//correct

import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input id="name" type="text" value={name} onChange={handleNameChange} />
        </label>

        <label htmlFor="email">
          Email:
          <input id="email" type="email" value={email} onChange={handleEmailChange} />
        </label>

        <label htmlFor="message">
          Message:
          <textarea id="message" value={message} onChange={handleMessageChange} />
        </label>

        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>

    </div>
  );
}

export default Form;
