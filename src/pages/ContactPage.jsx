// src/pages/ContactPage.jsx
import './ContactPage.css';
import { useAppContext } from '../context/AppContext';

const ContactPage = () => {
  const { lang } = useAppContext();

  return (
    <section className="contact-page" id="contact">
      <h2 className="section-title">
        {lang === 'zh' ? '联系我' : 'Contact Me'}
      </h2>
      <p className="contact-intro">
        {lang === 'zh'
          ? '欢迎通过以下方式与我联系。'
          : 'Feel free to reach out via the methods below.'}
      </p>

      <ul className="contact-list">
        <li>
          📧 Email:{' '}
          <a href="mailto:whiskeytaste@gmail.com">whiskeytaste@gmail.com</a>
        </li>
        <li>
          💼 LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/tim-yichen-tian"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/tim-yichen-tian
          </a>
        </li>
        <li>
          💻 GitHub:{' '}
          <a
            href="https://github.com/whiskey-taste"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/whiskey-taste
          </a>
        </li>
      </ul>
    </section>
  );
};

export default ContactPage;