import './Projects.css';
import { useAppContext } from '../context/AppContext';
import tour1 from '../assets/img/tour1.jpg';
import immi1 from '../assets/img/immi1.jpg';

const projects = [
  {
    id: 'a1',
    title: {
      en: 'Project A1: Responsive Multilingual Travel Website',
      zh: '项目 A1：多语言响应式旅游公司官网'
    },
    desc: {
      en: "A responsive, multilingual website for a travel agency to promote Tasmania’s scenic tours.",
      zh: "一个响应式、多语言支持的旅游公司网站，旨在推广塔斯马尼亚的自然与文化路线。"
    },
    image: tour1,
    link: 'https://whiskey-taste.github.io/JRAcademy_FullStack/P1/Tourism-v2/'
  },
  {
    id: 'a2',
    title: {
      en: 'Project A2: Responsive EB1-A immigration agency website',
      zh: '项目 A2：响应式移民公司官网'
    },
    desc: {
      en: 'Responsive website for an EB1-A immigration agency with service flow, case studies, and online form.',
      zh: '为一家EB1-A移民公司开发的响应式官网，包含服务流程、案例展示与在线评估表单。'
    },
    image: immi1,
    link: 'https://whiskey-taste.github.io/JRAcademy_FullStack/P1/Immigration/index.html'
  },
  {
    id: 'a3',
    title: {
      en: 'Project A3',
      zh: '项目 A3'
    },
    desc: {
      en: 'Work in progress...',
      zh: '制作中...'
    },
    image: '',
    link: '#'
  }
];

const Projects = () => {
  const { lang } = useAppContext();

  return (
    <section className="projects-section">
      <h2 className="section-title">{lang === 'zh' ? '我的项目' : 'My Projects'}</h2>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div className="project-card" key={proj.id}>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              <h3>{proj.title[lang]}</h3>
              <p>{proj.desc[lang]}</p>
              {proj.image && (
                <img
                  src={proj.image}
                  alt={proj.title[lang]}
                  className="project-image"
                />
              )}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;