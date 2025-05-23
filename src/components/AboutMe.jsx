// src/components/AboutMe.jsx
import './AboutMe.css';
import { useAppContext } from '../context/AppContext';
import htmlLogo from '../assets/skills/html.png';
import cssLogo from '../assets/skills/css.png';
import jsLogo from '../assets/skills/js.png';
import reactLogo from '../assets/skills/react.svg';
import nodeLogo from '../assets/skills/node.svg';
import pythonLogo from '../assets/skills/python.svg';
import javaLogo from '../assets/skills/java.svg';
import avatar from '../assets/img/avatar.png';
import jojo from '../assets/img/jojo.jpg';

const AboutMe = () => {
  const { lang, isDark } = useAppContext();
  const avatarSrc = isDark ? jojo : avatar;

  const skills = [
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'React', logo: reactLogo },
    { name: 'Node.js', logo: nodeLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'Java', logo: javaLogo }
  ];

  return (
    <section className="aboutme-container">
      <div className="aboutme-avatar">
        <img src={avatarSrc} alt="Avatar" className="avatar-image" />
      </div>
      <div className="aboutme-info">
        <h2>{lang === 'en' ? "Hi, I'm Tim" : '你好，我是 Tim'}</h2>
        <p>
          {lang === 'en'
            ? 'A full-stack developer who loves code, design, and sharing ideas.'
            : '一名全栈开发者，热爱编程、设计与分享技术。'}
        </p>
        <div className="tech-row">
          {skills.map((skill) => (
            <div key={skill.name} className="tech-icon">
              <img src={skill.logo} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;