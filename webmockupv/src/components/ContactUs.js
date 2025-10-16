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

                            <input
                                type="text"
                                name="name"
                                placeholder="Name*"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email*"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />

                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />

                            <textarea
                                name="message"
                                placeholder="Message"
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
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.649648774871!2d-79.54379042398716!3d43.84236187109374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2f4b21b97b7b%3A0x87a6830532b2fcfc!2sCanada&#39;s%20Wonderland!5e0!3m2!1sen!2sca!4v1760625917832!5m2!1sen!2sca" 
                        width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default ContactUs;
