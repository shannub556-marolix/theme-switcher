import { useState } from 'react';
import type { FormEvent } from 'react';

interface ContactProps {
  currentTheme: string;
}

function Contact({ currentTheme }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validate()) {
      const mailtoLink = `mailto:bussapagarishannu@gmail.com?subject=Message from ${encodeURIComponent(
        name
      )}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(email)}`;

      window.location.href = mailtoLink;

      // Optionally reset form
      setName('');
      setEmail('');
      setMessage('');
      setErrors({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className={`page page_${currentTheme}`}>
      <section className={`contact-hero contact-hero_${currentTheme}`}>
        <h1 className={`page-title page-title_${currentTheme}`}>Contact Us</h1>
        <p className={`page-subtitle page-subtitle_${currentTheme}`}>
          Get in touch with us for questions, feedback, or collaboration opportunities.
        </p>
      </section>

      <section className={`contact-content contact-content_${currentTheme}`}>
        <div className={`contact-grid contact-grid_${currentTheme}`}>
          <div className={`contact-info contact-info_${currentTheme}`}>
            <h2 className={`section-title section-title_${currentTheme}`}>Get In Touch</h2>

            <div className={`info-item info-item_${currentTheme}`}>
              <h3 className={`info-label info-label_${currentTheme}`}>Email</h3>
              <p className={`info-value info-value_${currentTheme}`}>bussapagarishannu@gmail.com</p>
            </div>

            <div className={`info-item info-item_${currentTheme}`}>
              <h3 className={`info-label info-label_${currentTheme}`}>Phone</h3>
              <p className={`info-value info-value_${currentTheme}`}>+91 9550685733</p>
            </div>

            <div className={`info-item info-item_${currentTheme}`}>
              <h3 className={`info-label info-label_${currentTheme}`}>Address</h3>
              <p className={`info-value info-value_${currentTheme}`}>
                Koramangala<br />
                Bengaluru, 560034<br />
                Karnataka, India
              </p>
            </div>
          </div>

          <div className={`contact-form contact-form_${currentTheme}`}>
            <h2 className={`section-title section-title_${currentTheme}`}>Send a Message</h2>
            <form className={`form form_${currentTheme}`} onSubmit={handleSubmit} noValidate>
              <div className={`form-group form-group_${currentTheme}`}>
                <label htmlFor="name" className={`form-label form-label_${currentTheme}`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`form-input form-input_${currentTheme}`}
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className="form-error">{errors.name}</p>}
              </div>

              <div className={`form-group form-group_${currentTheme}`}>
                <label htmlFor="email" className={`form-label form-label_${currentTheme}`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`form-input form-input_${currentTheme}`}
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="form-error">{errors.email}</p>}
              </div>

              <div className={`form-group form-group_${currentTheme}`}>
                <label htmlFor="message" className={`form-label form-label_${currentTheme}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`form-textarea form-textarea_${currentTheme}`}
                  placeholder="Your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {errors.message && <p className="form-error">{errors.message}</p>}
              </div>

              <button type="submit" className={`form-button form-button_${currentTheme}`}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className={`social social_${currentTheme}`}>
        <h2 className={`section-title section-title_${currentTheme}`}>Follow Us</h2>
        <div className={`social-links social-links_${currentTheme}`}>
          <a
            href="https://github.com/shannub556-marolix"
            className={`social-link social-link_${currentTheme}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://shanmukhas-portfolio.netlify.app/"
            className={`social-link social-link_${currentTheme}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
          <a
            href="https://www.linkedin.com/in/shanmukhabusappagari"
            className={`social-link social-link_${currentTheme}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
