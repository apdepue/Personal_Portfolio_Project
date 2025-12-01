import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
    notRobot: false
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

      setFormData({
      email: '',
      name: '',
      message: '',
      notRobot: false
    });
  };

  return (
    <div>
      <footer className="contact-container-fluid">
        <main>
          <div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="mb-3 px-2">
                <label htmlFor="email" className="form-label">Email address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  aria-describedby="emailHelp"
                  value={formData.email}
                  onChange={handleChange}
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3 px-2">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-floating mb-3 px-2">
                <textarea 
                  className="form-control" 
                  placeholder="Leave a comment here" 
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>
              <div className="mb-3 form-check">
                <input 
                  type="checkbox" 
                  className="form-check-input" 
                  id="notRobot"
                  checked={formData.notRobot}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="notRobot">I am not a robot</label>
              </div>
              <button type="submit" className="btn btn-light">Submit</button>
            </form>
          </div>
        </main>
      </footer>
    </div>
  );
}