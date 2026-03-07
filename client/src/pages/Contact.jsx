import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(null);

    const { name, email, message } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        setStatus('sending');

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            await axios.post(`${API_URL}/api/contact`, formData, config);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <motion.div
            className="contact-page section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-wrapper">
                    <motion.div
                        className="contact-info"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3>Let's Talk</h3>
                        <p>I'm open to new opportunities and collaborations. Feel free to reach out to me via email or social media.</p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <FaEnvelope className="c-icon" />
                                <span>vr926156@gmail.com</span>
                            </div>

                            <div className="contact-item">
                                <FaMapMarkerAlt className="c-icon" />
                                <span>India</span>
                            </div>

                            <div className="social-links">
                                <a href="https://github.com/Vishnuraj2005" target="_blank" rel="noopener noreferrer" className="s-icon"><FaGithub /></a>
                                <a href="https://www.linkedin.com/in/vishnu-raj-tech" target="_blank" rel="noopener noreferrer" className="s-icon"><FaLinkedin /></a>
                            </div>

                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        onSubmit={onSubmit}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={onChange}
                                className="form-control"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={onChange}
                                className="form-control"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                value={message}
                                onChange={onChange}
                                className="form-control"
                                placeholder="Your Message"
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && <p className="status-msg success">Message sent successfully!</p>}
                        {status === 'error' && <p className="status-msg error">Something went wrong. Please try again.</p>}
                    </motion.form>
                </div >
            </div >
        </motion.div >
    );
};

export default Contact;
