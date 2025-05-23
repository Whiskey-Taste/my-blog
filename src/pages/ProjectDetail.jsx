import { useParams } from 'react-router-dom';
import './ProjectDetail.css';
import { useAppContext } from '../context/AppContext';

// 项目数据（可后续移入独立 data 文件）
const projects = [
  {
    id: 'a1',
    title: {
      en: 'Project A1: Responsive Multilingual Travel Website',
      zh: '项目 A1：多语言响应式旅游公司官网'
    },
    desc: {
      en: 'I designed and developed a responsive, multilingual website for a fictional travel agency to promote Tasmania’s scenic tours. Key features include language switching, tour cards, responsive design, and an online booking form.',
      zh: '我为一个虚拟旅游公司设计并开发了一个响应式、多语言支持的网站，展示塔斯马尼亚的自然与文化路线。主要功能包括中英切换、路线卡片、响应式设计与在线预约表单。'
    },
    image: '/img/tour1.jpg',
    link: 'https://whiskey-taste.github.io/JRAcademy_FullStack/P1/Tourism-v2/'
  },
  {
    id: 'a2',
    title: {
      en: 'Project A2: Responsive EB1-A immigration agency website',
      zh: '项目 A2：响应式移民公司官网'
    },
    desc: {
      en: 'A full-featured EB1-A immigration website with service descriptions, categorized case studies, step-by-step guidance, and an embedded evaluation form.',
      zh: '一个完整的EB1-A移民服务官网，展示服务内容、分类案例、办理流程与在线评估表单。'
    },
    image: '/img/immi1.jpg',
    link: 'https://whiskey-taste.github.io/JRAcademy_FullStack/P1/Immigration/index.html'
  },
  {
    id: 'a3',
    title: {
      en: 'Project A3',
      zh: '项目 A3'
    },
    desc: {
      en: 'Coming soon...',
      zh: '敬请期待...'
    },
    image: '',
    link: '#'
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const { lang } = useAppContext();

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="project-detail">
        <h2>{lang === 'zh' ? '未找到项目' : 'Project Not Found'}</h2>
        <Link to="/projects" className="back-link">{lang === 'zh' ? '返回项目列表' : 'Back to Projects'}</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <h2>{project.title[lang]}</h2>
      {project.image && (
        <img src={project.image} alt={project.title[lang]} className="detail-image" />
      )}
      <p className="detail-description">{project.desc[lang]}</p>
      <a
        href={project.link}
        className="visit-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {lang === 'zh' ? '访问项目网站' : 'Visit Project Site'}
      </a>
      <br />
      <Link to="/projects" className="back-link">{lang === 'zh' ? '← 返回项目列表' : '← Back to Projects'}</Link>
    </div>
  );
};

export default ProjectDetail;