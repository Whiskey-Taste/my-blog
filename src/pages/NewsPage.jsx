// src/pages/NewsPage.jsx
import { useEffect, useState } from 'react';
import './NewsPage.css';
import { useAppContext } from '../context/AppContext';

const rssUrls = {
  tech: {
    en: 'https://api.rss2json.com/v1/api.json?rss_url=https://www.theverge.com/rss/index.xml',
    zh: 'https://api.rss2json.com/v1/api.json?rss_url=https://www.ithome.com/rss/',
  },
  stack: {
    en: 'https://api.rss2json.com/v1/api.json?rss_url=https://thenewstack.io/feed/',
    zh: 'https://api.rss2json.com/v1/api.json?rss_url=https://www.infoq.cn/feed.xml',
  },
};

const NewsPage = () => {
  const { lang } = useAppContext();
  const [techNews, setTechNews] = useState([]);
  const [stackNews, setStackNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const techRes = await fetch(rssUrls.tech[lang]);
        const techData = await techRes.json();
        setTechNews(techData.items || []);

        const stackRes = await fetch(rssUrls.stack[lang]);
        const stackData = await stackRes.json();
        setStackNews(stackData.items || []);
      } catch (err) {
        console.error('Error loading news:', err);
      }
    };
    fetchNews();
  }, [lang]);

  const renderNewsCard = (item) => {
    let image = item.thumbnail || '';
    if (!image && item.description) {
      const match = item.description.match(/<img[^>]+src="([^">]+)"/);
      if (match && match[1]) image = match[1];
    }
    const plainText = item.description.replace(/<[^>]+>/g, '').slice(0, 120) + '...';

    return (
      <div className="news-card" key={item.link}>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {image && <img src={image} alt="thumbnail" />}
          <h3>{item.title}</h3>
          <p>{plainText}</p>
        </a>
      </div>
    );
  };

  return (
    <section className="news-page">
      <h2 className="section-title">{lang === 'zh' ? '技术栈新闻' : 'Tech Stack News'}</h2>
      <div className="news-list">{stackNews.map(renderNewsCard)}</div>

      <h2 className="section-title">{lang === 'zh' ? '行业新闻' : 'Industry News'}</h2>
      <div className="news-list">{techNews.map(renderNewsCard)}</div>
    </section>
  );
};

export default NewsPage;