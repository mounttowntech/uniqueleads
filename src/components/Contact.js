import { forwardRef, useState } from "react";
import "./Contact.css";
import { contactService } from "../services/contactService";

const Contact = forwardRef((props, ref) => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });

    const [errors, setErrors] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors('');
        setSuccess('');
        // Handle form submission logic here
        // For example, you could call an API endpoint to submit the form data
        if(!formData.name || !formData.company || !formData.email || !formData.phone || !formData.service || !formData.message) {
            setErrors('Please fill in all required fields.');
            return;
        }
        try {
            const response = await contactService.createContact(formData);
            console.log('successres:', response);
            setSuccess('Your message has been sent successfully!');
            setFormData({
                name: "",
                company: "",
                email: "",
                phone: "",
                service: "",
                message: ""
            });

        } catch (error) {
            setErrors('Failed to send your message. Please try again.');
        }

    };

    return (
        <section class="contact-section" ref={ref}>
            <div class="contact-card">

              {/* LEFT CONTENT */}
              <div class="contact-info">
                  <h2>Let's Build Your Data Strategy</h2>
                  <p>
                      Ready to access premium leads and market insights?
                      Our team of data experts is here to help you find the
                      right solution for your business.
                  </p>

                  <div class="info-item">
                      <span class="icon">✉</span>
                      <span>hello@uniqueleads.com</span>
                  </div>

                  <div class="info-item">
                      <span class="icon">☎</span>
                      <span>+1 (888) 123-4567</span>
                  </div>
              </div>

              {/* RIGHT FORM */}
              <form class="contact-form" onSubmit={handleSubmit}>
                    {errors && <div class="error-message">{errors}</div>}
                    {success && <div class="success-message">{success}</div>}

                  <div class="form-row">
                      <div>
                          <label>Name</label>
                          <input type="text" name="name" value={formData.name} onChange={handleChange} />
                      </div>
                      <div>
                          <label>Company</label>
                          <input type="text" name="company" value={formData.company} onChange={handleChange} />
                      </div>
                  </div>

                  <div class="form-row">
                      <div>
                          <label>Email</label>
                          <input type="email" name="email" value={formData.email} onChange={handleChange} />
                      </div>
                      <div>
                          <label>Contact</label>
                          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                      </div>
                  </div>

                  <div>
                      <label>Service Interest</label>
                      <input type="text" name="service" value={formData.service} onChange={handleChange} />
                  </div>

                  <div>
                      <label>Message</label>
                      <textarea name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
                  </div>

                  <button type="submit">
                    <i class="fa-solid fa-paper-plane"></i> Send Request
                  </button>
              </form>

          </div>
      </section>
  );
});

export default Contact;