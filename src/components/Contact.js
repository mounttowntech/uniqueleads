import { forwardRef, useState } from "react";
import "./Contact.css";
import { contactService } from "../services/contactService";
import { validators } from "../utils/validators";

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
        
        // Validate input based on field name
        if (validators?.[name] && !validators[name](value)) {
            // setErrors(`Invalid ${name} format.`);
            return;
        }
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

        // remove error while typing
        // setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newErrors = {};
        setErrors('');
        setSuccess('');
        // Handle form submission logic here
        // For example, you could call an API endpoint to submit the form data
        if(!formData.name || !formData.company || !formData.email || !formData.phone || !formData.service || !formData.message) {
            setErrors('Please fill in all required fields.');
            return;
        }
        // Object.keys(formData).forEach((key) => {
        //     if (!formData[key]) {
        //         newErrors[key] = 'This field is required.';
        //     }
        // });

        if(formData.phone.length > 10) {
            newErrors.phone = 'Contact number cannot exceed 10 digits.';
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
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
        <section className="contact-section" ref={ref}>
            <div className="contact-card">

              {/* LEFT CONTENT */}
              <div className="contact-info">
                  <h2>Let's Build Your Data Strategy</h2>
                  <p>
                      Ready to access premium leads and market insights?
                      Our team of data experts is here to help you find the
                      right solution for your business.
                  </p>

                  <div className="info-item">
                      <span className="icon">✉</span>
                      <span>hello@uniqueleads.com</span>
                  </div>

                  <div className="info-item">
                      <span className="icon">☎</span>
                      <span>+1 (888) 123-4567</span>
                  </div>
              </div>

              {/* RIGHT FORM */}
              <form className="contact-form" onSubmit={handleSubmit}>
                    {errors && <div className="error-message">{errors}</div>}
                    {success && <div className="success-message">{success}</div>}

                  <div className="form-row">
                      <div>
                          <label>Name</label>
                          <input type="text" name="name" value={formData.name} onChange={handleChange} />
                          {/* {errors.name && <span>{errors.name}</span>} */}
                      </div>
                      <div>
                          <label>Company</label>
                          <input type="text" name="company" value={formData.company} onChange={handleChange} />
                          {/* {errors.company && <span>{errors.company}</span>} */}
                      </div>
                  </div>

                  <div className="form-row">
                      <div>
                          <label>Email</label>
                          <input type="email" name="email" value={formData.email} onChange={handleChange} />
                            {/* {errors.email && <span>{errors.email}</span>} */}
                      </div>
                      <div>
                          <label>Contact</label>
                          <input type="text" name="phone" value={formData.phone} onChange={handleChange} inputMode="numeric"/>
                          {/* {errors.phone && <span>{errors.phone}</span>} */}
                      </div>
                  </div>

                  <div>
                      <label>Service Interest</label>
                      <input type="text" name="service" value={formData.service} onChange={handleChange} />
                      {/* {errors.service && <span>{errors.service}</span>} */}

                  </div>

                  <div>
                      <label>Message</label>
                      <textarea name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
                        {/* {errors.message && <span>{errors.message}</span>} */}
                  </div>

                  <button type="submit">
                    <i className="fa-solid fa-paper-plane"></i> Send Request
                  </button>
              </form>

          </div>
      </section>
  );
});

export default Contact;