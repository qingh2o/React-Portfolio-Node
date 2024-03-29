import React, { useState } from 'react';
import ContactImage from '../utils/contact-image.png';

function Contact() {
    // Setting the component's initial state
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (event) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = () => {       
        const mailtoLink = `mailto:chingchingduncan@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
        window.location.href = mailtoLink;
    
        // Clear input fields after the user correctly fills out the form and submits it
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

return (
    <main>
        <article className="bg-light py-3 py-md-5">
            <section className="container">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                        <h3 className="fs-6 text-secondary mb-2 text-uppercase text-center">Message Me</h3>
                        <h2 className="display-5 mb-4 mb-md-5 text-center">I'm always on the lookout to work with new clients.</h2>
                        <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row gy-3 gy-md-4 gy-lg-0 align-items-xl-center">
                    <div className="col-12 col-lg-6 text-center">
                        <img className="img-fluid rounded" loading="lazy" src={ContactImage} style={{ maxWidth: '80%', height: 'auto' }} alt="Get in Touch" />
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="row justify-content-xl-center">
                            <div className="col-12 col-xl-11">
                                <div className="bg-white border rounded shadow-sm overflow-hidden">
                                    {/* Contact From */}
                                    <form
                                        id="contact-form"
                                        onSubmit={handleFormSubmit}
                                    >
                                        <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                                            <div className="col-12">
                                                <label htmlFor="fullName" className="form-label">Full Name <span className="text-danger">*</span></label>
                                                {/* Full name input*/}
                                                <input
                                                    type="text"
                                                    className='form-control'
                                                    id="fullName"
                                                    name="fullName"
                                                    onChange={handleInputChange}
                                                    required />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                        </svg>
                                                    </span>
                                                    {/* Email input*/}
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name="email"
                                                        onChange={handleInputChange}
                                                        required />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                        </svg>
                                                    </span>
                                                    {/* Phone input*/}
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        id="phone"
                                                        name="phone"
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="subject" className="form-label">Subject <span className="text-danger">*</span></label>
                                                {/* Subject input*/}
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    name="subject"
                                                    onChange={handleInputChange}
                                                    required />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
                                                {/* Message input*/}
                                                <textarea
                                                    className="form-control"
                                                    id="message"
                                                    name="message"
                                                    onChange={handleInputChange}
                                                    rows="3"
                                                    required></textarea>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    {/* Submit button*/}
                                                    <button
                                                        className="btn btn-primary btn-lg rounded-pill"
                                                        type="submit"
                                                    >Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Email Address */}
            <section className="container mt-5 pt-5 pt-md-5">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                        <h3 className="fs-6 text-secondary mb-2 text-uppercase text-center">Email Me</h3>
                        <h2 className="display-5 mb-4 text-center">Here is my email address</h2>
                        <h3 className="fs-5 mb-4 mb-md-5 text-center">qingqingyang@hotmail.co.uk</h3>
                        <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                    </div>
                </div>
            </section>
        </article>
    </main>
);
}
export default Contact;