import React from 'react';
import { Typography } from 'antd';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const HomeStory: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding" style={{ textAlign: 'center', background: 'rgba(0,0,0,0.02)' }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Title level={4} style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: 3, marginBottom: 24 }}>
          {t('story.title')}
        </Title>
        <Paragraph style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 500, lineHeight: 1.4, maxWidth: 1000, margin: '0 auto 40px' }}>
          {t('story.p1')}
        </Paragraph>
        <Paragraph style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 700, fontStyle: 'italic', background: 'linear-gradient(90deg, #1349ec, #00d2ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          "{t('story.highlight')}"
        </Paragraph>
      </motion.div>
    </section>
  );
};

export default HomeStory;
