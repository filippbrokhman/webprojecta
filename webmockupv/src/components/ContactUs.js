import React, { useState } from "react";
import './component.css'

function ContactUs() {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    alert("Thank you for your message!");
  };
    return (
        <div>
            <section className="contact-section" style={{paddingTop: 80}}>
                <div className="contact-container">
                    <ul>
                        <h1> Contact Us</h1>
                        <form className="contact-form" onSubmit={handleSubmit}>

                            <label>
                                Name<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <label>
                                Email<span className="required">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                            <label>Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />

                            <label>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />

                            <label>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                            ></textarea>

                            <button type="submit">Submit</button>
                        </form>
                    </ul>
                </div>
                <div className="body-content">
                    <ul>
                        <h1> content header test</h1>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            Vestibulum sollicitudin, metus sit amet vehicula commodo, 
                            lectus lectus vehicula purus, nec dapibus risus dolor at nisi. 
                            Suspendisse et iaculis magna, sed malesuada est. 
                            Nunc vestibulum laoreet tempus.</p>
                        <p>Will be a button with link soon</p>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default ContactUs;
