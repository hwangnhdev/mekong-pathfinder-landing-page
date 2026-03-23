import React from 'react';
import { Row, Col, Space, Typography, Button } from 'antd';
import { Github, Facebook, Twitter, Mail, Instagram } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

const { Text, Title } = Typography;

import logoIcon from '../../assets/images/logo_header/logo_icon.png';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const footerLinks = [
    {
      title: t('footer.links.title'),
      links: [
        { label: t('nav.home'), path: '/' },
        { label: t('nav.team'), path: '/team' },
        { label: t('achievements.hero'), path: '/achievements' },
        { label: t('footer.contact'), path: '/' },
      ]
    },
    {
      title: t('footer.app.title'),
      links: [
        { label: t('nav.download'), path: '/download' },
        { label: t('footer.vision'), path: '/' },
      ]
    },
    {
      title: t('footer.legal.title'),
      links: [
        { label: t('footer.privacy'), path: '/' },
        { label: t('footer.terms'), path: '/' },
      ]
    }
  ];

  return (
    <footer style={{
      position: 'relative',
      padding: '60px 0 40px',
      background: 'linear-gradient(180deg, #fff 0%, #f0f7ff 100%)',
      color: 'inherit',
      overflow: 'hidden',
      borderTop: '1px solid rgba(19, 73, 236, 0.05)'
    }}>
      {/* Background Aura Effects */}
      <div className="aura-glow aura-top-right" style={{ opacity: 0.05, transform: 'scale(2)', top: '-50%' }} />
      <div className="aura-glow aura-bottom-left" style={{ opacity: 0.05, transform: 'scale(1.5)', bottom: '-30%' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
        <Row gutter={[48, 60]}>
          {/* Brand Section */}
          <Col xs={24} lg={8}>
            <Space direction="vertical" size={24}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <img src={logoIcon} alt="Logo" style={{ width: 45, height: 45 }} />
                <Title level={3} className="poppins" style={{ margin: 0, color: 'var(--primary-color)', letterSpacing: -1 }}>
                  Mekong Pathfinder
                </Title>
              </div>
              <Text type="secondary" style={{ fontSize: '1rem', lineHeight: 1.7, display: 'block', maxWidth: 350 }}>
                {t('footer.about')}
              </Text>
              <Space size="large" style={{ marginTop: 8 }}>
                {[Facebook, Twitter, Github, Instagram].map((Icon, i) => (
                  <motion.a
                    href="https://www.facebook.com/mekongpathfinder"
                    key={i}
                    whileHover={{ y: -5, color: 'var(--primary-color)' }}
                    style={{ color: 'rgba(0,0,0,0.3)', transition: 'color 0.3s' }}
                  >
                    <Icon size={22} />
                  </motion.a>
                ))}
              </Space>
            </Space>
          </Col>

          {/* Links Sections */}
          {footerLinks.map((section, idx) => (
            <Col xs={12} sm={8} lg={4} key={idx}>
              <Title level={5} className="poppins" style={{ color: 'var(--primary-color)', marginBottom: 24, textTransform: 'uppercase', letterSpacing: 2, fontSize: '0.8rem' }}>
                {section.title}
              </Title>
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                {section.links.map((link, i) => (
                  <Link
                    to={link.path}
                    key={i}
                    style={{ color: 'rgba(0,0,0,0.5)', transition: 'all 0.3s', display: 'block' }}
                    className="footer-link-hover"
                  >
                    {link.label}
                  </Link>
                ))}
              </Space>
            </Col>
          ))}

          {/* Newsletter / Contact Section */}
          <Col xs={24} lg={4}>
            <Title level={5} className="poppins" style={{ color: 'var(--primary-color)', marginBottom: 24, textTransform: 'uppercase', letterSpacing: 2, fontSize: '0.8rem' }}>
              Connect
            </Title>
            <Button
              type="primary"
              icon={<Mail size={18} />}
              size="large"
              block
              style={{ borderRadius: 12, height: 50 }}
            >
              Email Us
            </Button>
            <div style={{ marginTop: 24 }}>
              <Text type="secondary" style={{ fontSize: '0.8rem' }}>
                Cần Thơ, Vietnam
              </Text>
            </div>
          </Col>
        </Row>

        {/* Divider & Copyright */}
        <div style={{
          marginTop: 40,
          paddingTop: 40,
          borderTop: '1px solid rgba(0,0,0,0.05)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 20
        }}>
          <Text type="secondary">
            © {new Date().getFullYear()} Mekong Pathfinder. {t('footer.builtBy')}
          </Text>
          <Space size="large">
            <Text style={{ color: 'rgba(0,0,0,0.2)', fontSize: '0.8rem' }}>
              v2.4.0-stable
            </Text>
          </Space>
        </div>
      </div>

      <style>{`
        .footer-link-hover:hover {
          color: var(--primary-color) !important;
          transform: translateX(8px);
        }
        @media (max-width: 576px) {
          .footer-link-hover:hover { transform: none; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
