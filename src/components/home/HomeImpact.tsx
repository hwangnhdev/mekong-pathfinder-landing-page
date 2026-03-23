import React from 'react';
import { Typography, Row, Col, Space, Button } from 'antd';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import { ShieldCheck, LineChart, Globe } from 'lucide-react';


const { Title, Paragraph } = Typography;

const HomeImpact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="section-padding">
      <div style={{ textAlign: 'center', marginBottom: 80 }}>
        <Title level={2} className="poppins" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
          {t('impact.title')}
        </Title>
        <Paragraph style={{ fontSize: '1.2rem', opacity: 0.8 }}>
          {t('impact.subtitle')}
        </Paragraph>
      </div>

      <Row gutter={[32, 32]} justify="center">
        <Col xs={24} md={8}>
          <div style={{ textAlign: 'center' }}>
            <ShieldCheck size={48} color="var(--primary-color)" style={{ marginBottom: 20 }} />
            <Title level={4}>{t('impact.p1')}</Title>
          </div>
        </Col>
        <Col xs={24} md={8}>
          <div style={{ textAlign: 'center' }}>
            <LineChart size={48} color="#00d2ff" style={{ marginBottom: 20 }} />
            <Title level={4}>{t('impact.p2')}</Title>
          </div>
        </Col>
        <Col xs={24} md={8}>
          <div style={{ textAlign: 'center' }}>
            <Globe size={48} color="#3fcf8e" style={{ marginBottom: 20 }} />
            <Title level={4}>{t('impact.p3')}</Title>
          </div>
        </Col>
      </Row>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        style={{ 
          marginTop: 100,
          background: 'linear-gradient(135deg, #1349ec 0%, #3f68e4 100%)',
          borderRadius: 40,
          padding: '80px 40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Title level={2} className="poppins" style={{ color: 'white', marginBottom: 24 }}>
          {t('home.cta.title')}
        </Title>
        <Paragraph style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', marginBottom: 48 }}>
          {t('home.cta.desc')}
        </Paragraph>
        <Space size="large" wrap style={{ justifyContent: 'center' }}>
          <a href="#download">
            <Button size="large" shape="round" style={{ height: 56, padding: '0 40px', background: 'white', color: 'var(--primary-color)' }}>
              {t('nav.download')}
            </Button>
          </a>
          <a href="#feedback">
            <Button ghost size="large" shape="round" style={{ height: 56, padding: '0 40px', borderColor: 'white', color: 'white' }}>
              {t('nav.feedback')}
            </Button>
          </a>
        </Space>
      </motion.div>
    </div>
  );
};

export default HomeImpact;
