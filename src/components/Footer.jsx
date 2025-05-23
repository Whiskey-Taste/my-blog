// src/components/Footer.jsx
import './Footer.css';
import { useAppContext } from '../context/AppContext';

const Footer = () => {
  const { lang } = useAppContext();

  return (
    <footer className="site-footer">
      <div className="inner">
        <p>
          {lang === 'en'
            ? 'Email: whiskeytaste@gmail.com | All rights reserved © 2025'
            : '联系邮箱：whiskeytaste@gmail.com ｜ 版权所有 © 2025'}
        </p>
      </div>
    </footer>
  );
};

export default Footer;