// src/components/NewsSection.jsx
import { useEffect, useState } from 'react';
import './NewsSection.css';
import { useAppContext } from '../context/AppContext';

const rssUrls = {
  en: 'https://api.rss2json.com/v1/api.json?rss_url=https://www.theverge.com/rss/index.xml',
  zh: 'https://api.rss2json.com/v1/api.json?rss_url=https://www.ithome.com/rss/',
};

const NewsSection = () => {
  const { lang } = useAppContext();
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      try {
        const res = await fetch(rssUrls[lang]);
        const data = await res.json();
        setNewsItems(data.items || []);
      } catch (err) {
        console.error('Failed to fetch news:', err);
        setNewsItems([]);
      }
      setLoading(false);
    };

    loadNews();
  }, [lang]);

  return (
    <section className="news-section" id="news">
      <h2 className="section-title">
        {lang === 'zh' ? '行业新闻' : 'Industry News'}
      </h2>

      {loading ? (
        <p className="news-loading">{lang === 'zh' ? '加载中...' : 'Loading...'}</p>
      ) : (
        <div className="news-grid">
          {newsItems.slice(0, 6).map((item, index) => {
            const imageMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
            const image = item.thumbnail || (imageMatch ? imageMatch[1] : null);
            const plainText = item.description.replace(/<[^>]+>/g, '');
            return (
              <div className="news-card" key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {image && <img src={image} alt="thumbnail" />}
                  <h3>{item.title}</h3>
                  <p>{plainText.slice(0, 120)}...</p>
                </a>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default NewsSection;