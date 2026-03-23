import React from 'react';
import HomeHero from '../components/home/HomeHero';
import HomeStory from '../components/home/HomeStory';
import HomeProblem from '../components/home/HomeProblem';
import HomeGallery from '../components/home/HomeGallery';
import HomeSolution from '../components/home/HomeSolution';
import { Button, Typography } from 'antd';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const LandingPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="landing-page">
      <section id="home">
        <HomeHero />
        <HomeStory />
        <HomeProblem />
        <HomeGallery />
        <HomeSolution />

        {/* Bottom CTA to other pages */}
        <section className="section-padding" style={{ textAlign: 'center', background: 'var(--primary-color)', color: 'white' }}>
          <Title level={2} style={{ color: 'white', marginBottom: 24 }}>{t('home.cta.title')}</Title>
          <Paragraph style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', marginBottom: 40 }}>
            {t('home.cta.desc')}
          </Paragraph>
          <Link to="/download">
            <Button size="large" shape="round" icon={<ArrowRight size={20} />} style={{ height: 60, padding: '0 40px' }}>
              Bắt đầu ngay
            </Button>
          </Link>
        </section>
      </section>
    </div>
  );
};

export default LandingPage;
