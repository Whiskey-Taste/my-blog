// src/components/Header.jsx
import { useLocation, Link } from 'react-router-dom';
import './Header.css';
import { useAppContext } from '../context/AppContext';

const Header = () => {
  const { lang, switchLanguage, isDark, toggleTheme } = useAppContext();
  const location = useLocation();

  const navItems = [
    { to: '/', label: { en: 'Home', zh: '首页' } },
    { to: '/projects', label: { en: 'Projects', zh: '项目' } },
    { to: '/news', label: { en: 'News', zh: '新闻' } },
    { to: '/contact', label: { en: 'Contact', zh: '联系' } },
  ];

  return (
    <div className="site-header-wrapper">
      <header className="site-header">
        <h1>{lang === 'en' ? "Tim's Personal Blog" : 'Tim的个人博客'}</h1>
        <nav>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={location.pathname === item.to ? 'active' : ''}
            >
              {item.label[lang]}
            </Link>
          ))}
        </nav>
        <div className="controls">
          <button onClick={() => switchLanguage(lang === 'en' ? 'zh' : 'en')}>
            {lang === 'en' ? '中' : 'EN'}
          </button>
          <button onClick={toggleTheme}>🌓</button>
        </div>
      </header>
    </div>
  );
};

export default Header;