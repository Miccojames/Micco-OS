import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import '../styles/contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const submit = e => {
    e.preventDefault();
    alert('Message sent (demo only).');
    setForm({ firstName: '', lastName: '', email: '', message: '' }); // reset form
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* Left: Contact Info */}
        <div className="contact-info">
          <div className="info-box">
            <h4>Email</h4>
            <p>miccojamesang9@gmail.com</p>
            <small>I ensure fast communication so you won’t be kept waiting.</small>
          </div>

          <div className="info-box">
            <h4>Phone</h4>
            <p>+63 961 701 1008</p>
            <small>Open to communication and collaboration whenever needed.</small>
          </div>

          <div className="info-box">
            <h4>Connect with me</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>

              <a href="https://github.com/Miccojames" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-form-section">
          <h3>Reach out anytime</h3>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-row">
              <input
                type="text"
                placeholder="First Name"
                required
                value={form.firstName}
                onChange={e => setForm({ ...form, firstName: e.target.value })}
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                value={form.lastName}
                onChange={e => setForm({ ...form, lastName: e.target.value })}
              />
            </div>

            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />

            <textarea
              placeholder="How can I help you? (Max 500 characters)"
              maxLength={500}
              required
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
    </section>
  );
}
