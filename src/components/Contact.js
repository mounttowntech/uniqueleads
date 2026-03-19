import { forwardRef } from "react";
import "./Contact.css";

const Contact = forwardRef((props, ref) => {
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
              <form class="contact-form">
                  <div class="form-row">
                      <div>
                          <label>Name</label>
                          <input type="text" />
                      </div>
                      <div>
                          <label>Company</label>
                          <input type="text" />
                      </div>
                  </div>

                  <div class="form-row">
                      <div>
                          <label>Email</label>
                          <input type="email" />
                      </div>
                      <div>
                          <label>Contact</label>
                          <input type="text" />
                      </div>
                  </div>

                  <div>
                      <label>Service Interest</label>
                      <input type="text" />
                  </div>

                  <div>
                      <label>Message</label>
                      <textarea rows="4"></textarea>
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