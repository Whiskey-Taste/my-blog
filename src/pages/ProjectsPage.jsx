// src/pages/ProjectsPage.jsx
import { useAppContext } from '../context/AppContext';
import './ProjectsPage.css';

import tourImage from '../assets/img/tour1.jpg';
import immiImage from '../assets/img/immi1.jpg';
import aiImage from '../assets/img/ai1.jpg';

import htmlLogo from '../assets/skills/html.png';
import cssLogo from '../assets/skills/css.png';
import sassLogo from '../assets/skills/sass.png';
import jsLogo from '../assets/skills/js.png';
import es6Logo from '../assets/skills/es6.png';
import tsLogo from '../assets/skills/ts.png';
import reactLogo from '../assets/skills/react.svg';
import uiLogo from '../assets/skills/ui.png';
import webpackLogo from '../assets/skills/webpack.jpg';
import dbLogo from '../assets/skills/db.png';
import mongoLogo from '../assets/skills/mongodb.svg';
import mysqlLogo from '../assets/skills/mysql.svg';
import apiLogo from '../assets/skills/api.svg';
import postmanLogo from '../assets/skills/postman.jpg';
import javaLogo from '../assets/skills/java.svg';
import pythonLogo from '../assets/skills/python.svg';
import nodeLogo from '../assets/skills/node.svg';
import dockerLogo from '../assets/skills/docker.svg';
import awsLogo from '../assets/skills/aws.png';
import agileLogo from '../assets/skills/agile.jpg';
import scrumLogo from '../assets/skills/scrum.svg';
import gitLogo from '../assets/skills/git.svg';
import algoLogo from '../assets/skills/algo.png';
import openaiLogo from '../assets/skills/openai.png';

const projectData = [
  {
    id: 'a1',
    title: {
      en: 'Project A1: Responsive Multilingual Travel Website',
      zh: '项目 A1：多语言响应式旅游公司官网'
    },
    desc: {
      en: 'Responsive site for a travel agency to promote Tasmania tours.',
      zh: '一个响应式旅游公司网站，推广塔斯马尼亚路线。'
    },
    image: tourImage,
    link: 'https://whiskey-taste.github.io/JRAcademy_FullStack/P1/Tourism-v2/'
  },
  {
    id: 'a2',
    title: {
      en: 'Project A2: Responsive EB1-A Immigration Website',
      zh: '项目 A2：响应式EB1-A移民公司官网'
    },
    desc: {
      en: 'Complete EB1-A agency site with cases, forms, process.',
      zh: '完整EB1-A官网，含成功案例、评估表单与办理流程。'
    },
    image: immiImage,
    link: 'https://whiskey-taste.github.io/JRAcademy_FullStack/P1/Immigration/index.html'
  },
  {
    id: 'a3',
    title: {
      en: 'Project A3: Dispatch AI Smart Virtual Assistant',
      zh: '项目 A3：Dispatch AI 智能虚拟助手'
    },
    desc: {
      en: 'A virtual assistant platform for service professionals (e.g. leasing agents, plumbers, contractors) using Next.js, NestJS, React Native, AWS, and RAG-based LLM architecture.',
      zh: '面向服务类专业人士（如租赁经理、水管工、承包商）的智能虚拟助手平台，采用 Next.js、NestJS、React Native、AWS 与基于 RAG 的大模型架构开发。'
    },
    image: aiImage,
    link: 'https://uat.getdispatch.ai/'
  }
];

const skills = [
  { name: 'HTML5', logo: htmlLogo },
  { name: 'CSS3', logo: cssLogo },
  { name: 'Sass', logo: sassLogo },
  { name: 'JavaScript', logo: jsLogo },
  { name: 'ES6', logo: es6Logo },
  { name: 'TypeScript', logo: tsLogo },
  { name: 'React', logo: reactLogo },
  { name: 'UI Design', logo: uiLogo },
  { name: 'Webpack', logo: webpackLogo },
  { name: 'Database', logo: dbLogo },
  { name: 'MongoDB', logo: mongoLogo },
  { name: 'MySQL', logo: mysqlLogo },
  { name: 'RESTful API', logo: apiLogo },
  { name: 'Postman', logo: postmanLogo },
  { name: 'Java', logo: javaLogo },
  { name: 'Python', logo: pythonLogo },
  { name: 'NodeJS', logo: nodeLogo },
  { name: 'Docker', logo: dockerLogo },
  { name: 'AWS', logo: awsLogo },
  { name: 'Agile', logo: agileLogo },
  { name: 'Scrum', logo: scrumLogo },
  { name: 'Git', logo: gitLogo },
  { name: 'Algorithm', logo: algoLogo },
  { name: 'OpenAI', logo: openaiLogo }
];

const ProjectsPage = () => {
  const { lang } = useAppContext();

  return (
    <section className="projects-page">
      <h2 className="section-title">{lang === 'zh' ? '项目展示' : 'Projects Showcase'}</h2>
      <div className="projects-grid">
        {projectData.map((proj) => (
          <div key={proj.id} className="project-card">
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              {proj.image && <img src={proj.image} alt={proj.title[lang]} />}
              <h3>{proj.title[lang]}</h3>
              <p>{proj.desc[lang]}</p>
            </a>
          </div>
        ))}
      </div>

      <h2 className="section-title">{lang === 'zh' ? '全部技术栈' : 'Full Tech Stack'}</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <img src={skill.logo} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
