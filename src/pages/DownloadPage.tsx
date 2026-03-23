import React, { useState, useEffect, useRef } from 'react';
import {
  Row,
  Col,
  Divider,
  Card,
  Typography,
} from "antd"
import { useTheme } from "../context/ThemeContext"
import { useLanguage } from "../context/LanguageContext"
import {
  AndroidOutlined,
  StarOutlined,
  SafetyOutlined,
  ApiOutlined,
  CameraOutlined,
} from "@ant-design/icons"
import { motion, animate, useInView } from "framer-motion"

// Asset Imports
import applicationBg from "../assets/images/logo_header/background.jpg"
import googlePlayBadge from "../assets/images/logo_header/icon-ggplay.png"
import appStoreStoreBadge from "../assets/images/logo_header/icon-appstore.png"
import textMekong from "../assets/images/logo_header/text-mekong.png"
import threePhones from "../assets/images/logo_header/three-smart-phone.png"
import floodMapSolutionImg from "../assets/images/application/map-cantho-01.jpg"
import floodMapImg from "../assets/images/application/z7647828681024_9b0793ac94c432c38a7b7d3edb7b014b.jpg"
import communityImg from "../assets/images/application/z7647828681025_f911785e6192886dc3b11a8579fc1b66.jpg"
import aiSolutionImg from "../assets/images/application/ai-solution.png"
import reportImg from "../assets/images/application/z7647845510732_d89cf80d003625605f195b82242ef399.jpg"

const { Title, Paragraph, Text } = Typography

// Counter Component for stats
const Counter = ({ value, duration = 2, suffix = "" }: { value: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        onUpdate(latest) {
          setCount(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

// Motion Wrapper Component for sections
const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: delay / 1000 }}
  >
    {children}
  </motion.div>
);

const DownloadPage: React.FC = () => {
  const { mode } = useTheme()
  const { t } = useLanguage()

  return (
    <div style={{ paddingTop: 70 }}>
      <style>
        {`
        .feature-card { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .feature-card:hover { 
          transform: translateY(-15px) rotateX(5deg) scale(1.02); 
          box-shadow: 0 30px 60px rgba(0,0,0,0.12); 
        }
        
        .hover-text {
          transition: all 0.3s ease;
          display: inline-block;
        }
        .hover-text:hover {
          color: #1349ec !important;
          transform: translateX(10px);
        }

        .hover-title {
          transition: all 0.3s ease;
        }
        .hover-title:hover {
          color: #1349ec !important;
          transform: scale(1.02);
          text-shadow: 0 5px 15px rgba(19, 73, 236, 0.2);
        }

        .image-placeholder-3d {
          transition: all 0.5s ease;
          perspective: 1000px;
          transform-style: preserve-3d;
          overflow: hidden;
        }
        .image-placeholder-3d img {
          transition: all 0.5s ease;
        }
        .image-placeholder-3d:hover {
          transform: rotateY(-5deg) rotateX(5deg);
          box-shadow: 20px 20px 60px rgba(0,0,0,0.1);
          border-color: #1349ec !important;
        }
        .image-placeholder-3d:hover img {
          transform: scale(1.1);
        }

        .floating-anim {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        .stat-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: default;
        }
        .stat-card:hover {
          transform: translateY(-10px) scale(1.1);
        }
        .stat-card:hover h1 {
          color: #1349ec !important;
          text-shadow: 0 10px 20px rgba(19, 73, 236, 0.3);
        }

        .trust-badge {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }
        .trust-badge:hover {
          background: rgba(255,255,255,0.25) !important;
          transform: translateY(-15px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          border-color: rgba(255,255,255,0.5) !important;
        }

        .badge-bounce {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
        }
        .badge-bounce:hover {
          transform: scale(1.08) translateY(-8px);
          filter: drop-shadow(0 15px 25px rgba(0,0,0,0.2));
        }

        .marquee-container {
          overflow: hidden;
          padding: 40px 0;
          background: transparent;
          white-space: nowrap;
        }
        .marquee-content {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
        .marquee-item {
          display: inline-flex;
          align-items: center;
          margin-right: 60px;
          font-size: 24px;
          transition: all 0.3s;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .responsive-line {
            margin: 0 auto 24px auto !important;
          }
          .ant-typography {
            text-align: center !important;
          }
          .hero-banner {
            height: 600px !important;
            background-size: cover !important;
          }
          .hero-text-container {
            width: 90% !important;
            left: 5% !important;
            bottom: 65% !important;
          }
          .hero-badge-apple {
            width: 40% !important;
            left: 7% !important;
            bottom: 52% !important;
          }
          .hero-badge-google {
            width: 42% !important;
            left: 51% !important;
            bottom: 52% !important;
          }
          .hero-phones {
            width: 80% !important;
            bottom: 5% !important;
            right: 10% !important;
            height: 35% !important;
          }
        }
      `}
      </style>

      {/* Hero Banner Section */}
      <div
        className="hero-banner"
        style={{
          position: "relative",
          height: "clamp(360px, 58vw, 680px)",
          width: "100%",
          backgroundImage: `url(${applicationBg})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
          marginTop: 0,
          overflow: "hidden"
        }}
      >
        <div
          className="hero-text-container"
          style={{
            position: "absolute",
            left: "2%",
            bottom: "50%",
            width: "60%",
            height: "15%",
            zIndex: 10,
            cursor: "default",
            transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start"
          }}
        >
          <img src={textMekong} alt="Mekong Pathfinder Text" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
        </div>

        <div
          className="badge-bounce hero-badge-apple"
          style={{
            position: "absolute",
            left: "10%",
            bottom: "32%",
            width: "17%",
            height: "7%",
            cursor: "pointer",
            zIndex: 10,
          }}
          onClick={() => { }}
        >
          <img src={appStoreStoreBadge} alt="App Store" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
        </div>

        <div
          className="badge-bounce hero-badge-google"
          style={{
            position: "absolute",
            left: "25%",
            bottom: "32%",
            width: "17.7%",
            height: "7%",
            cursor: "pointer",
            zIndex: 10,
          }}
          onClick={() => window.open('https://play.google.com/store/apps/details?id=com.fpt.mekongpathfinder', '_blank')}
        >
          <img src={googlePlayBadge} alt="Google Play Store" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
        </div>

        <div
          className="floating-anim hero-phones"
          style={{
            position: "absolute",
            right: "5%",
            bottom: "10%",
            width: "45%",
            height: "80%",
            zIndex: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.5s ease",
            perspective: "1000px"
          }}
        >
          <img
            src={threePhones}
            alt="Smartphone Mockups"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.2))"
            }}
          />
        </div>
      </div>

      <div style={{ width: "100%", margin: "0", background: mode === 'dark' ? '#0a0c14' : '#fff', paddingTop: "40px", paddingBottom: "20px" }}>
        <div className="section-padding">
          {/* Section 1 */}
          <AnimatedSection delay={50}>
            <Row gutter={[48, 48]} align="middle" style={{ marginBottom: '100px' }}>
              <Col xs={24} md={12}>
                <div
                  className="image-placeholder-3d floating-anim"
                  style={{
                    background: 'linear-gradient(135deg, #e6f7ff 0%, #ffffff 100%)',
                    borderRadius: '24px',
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
                  }}
                >
                  <img src={floodMapSolutionImg} alt="Flood Map Solution" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </Col>
              <Col xs={24} md={12}>
                <Title level={2} className="hover-title" style={{ fontSize: '36px', color: 'var(--primary-color)' }}>{t('download.solution.title')}</Title>
                <div style={{ width: '60px', height: '4px', background: '#1349ec', margin: '0 0 24px 0', borderRadius: '2px' }} className="responsive-line" />
                <Paragraph className="hover-text" style={{ fontSize: '18px', lineHeight: '1.8', opacity: 0.8 }}>
                  {t('download.solution.desc')}
                </Paragraph>
              </Col>
            </Row>
          </AnimatedSection>

          {/* Section 2 */}
          <AnimatedSection delay={50}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <Title level={2} className="hover-title" style={{ fontSize: '36px', color: 'var(--primary-color)' }}>{t('download.features.deep.title')}</Title>
              <div style={{ width: '100px', height: '4px', background: '#1349ec', margin: '0 auto 24px', borderRadius: '2px' }} />
            </div>

            <Row gutter={[32, 48]} style={{ marginBottom: '100px' }}>
              <Col xs={24} md={8}>
                <Card className="feature-card" bordered={false} style={{ borderRadius: '24px', overflow: 'hidden', background: 'var(--glass-bg-light)', border: '1px solid var(--border-light)', height: '100%' }}>
                  <div className="image-placeholder-3d" style={{ height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '30px' }}>
                    <img src={floodMapImg} alt="Flood Map App" style={{ height: '100%', borderRadius: '24px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', border: '6px solid white' }} className="floating-anim" />
                  </div>
                  <div style={{ padding: '24px' }}>
                    <Title level={4} className="hover-title"><AndroidOutlined style={{ marginRight: 12, color: 'var(--primary-color)' }} />{t('download.features.flood.title')}</Title>
                    <Paragraph className="hover-text" style={{ fontSize: '15px', opacity: 0.8 }}>{t('download.features.flood.desc')}</Paragraph>
                  </div>
                </Card>
              </Col>

              <Col xs={24} md={8}>
                <Card className="feature-card" bordered={false} style={{ borderRadius: '24px', overflow: 'hidden', background: 'var(--glass-bg-light)', border: '1px solid var(--border-light)', height: '100%' }}>
                  <div className="image-placeholder-3d" style={{ height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '30px' }}>
                    <img src={reportImg} alt="Reporting App" style={{ height: '100%', borderRadius: '24px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', border: '6px solid white' }} className="floating-anim" />
                  </div>
                  <div style={{ padding: '24px' }}>
                    <Title level={4} className="hover-title"><CameraOutlined style={{ marginRight: 12, color: '#ff4d4f' }} />{t('download.features.report.title')}</Title>
                    <Paragraph className="hover-text" style={{ fontSize: '15px', opacity: 0.8 }}>{t('download.features.report.desc')}</Paragraph>
                  </div>
                </Card>
              </Col>

              <Col xs={24} md={8}>
                <Card className="feature-card" bordered={false} style={{ borderRadius: '24px', overflow: 'hidden', background: 'var(--glass-bg-light)', border: '1px solid var(--border-light)', height: '100%' }}>
                  <div className="image-placeholder-3d" style={{ height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '30px' }}>
                    <img src={communityImg} alt="Community App" style={{ height: '100%', borderRadius: '24px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', border: '6px solid white' }} className="floating-anim float-delay-2" />
                  </div>
                  <div style={{ padding: '24px' }}>
                    <Title level={4} className="hover-title"><StarOutlined style={{ marginRight: 12, color: '#3fcf8e' }} />{t('download.features.community.title')}</Title>
                    <Paragraph className="hover-text" style={{ fontSize: '15px', opacity: 0.8 }}>{t('download.features.community.desc')}</Paragraph>
                  </div>
                </Card>
              </Col>
            </Row>
          </AnimatedSection>

          {/* Section 3 */}
          <AnimatedSection delay={50}>
            <div style={{ background: 'linear-gradient(135deg, #1349ec 0%, #001d66 100%)', padding: '80px 40px', borderRadius: '40px', textAlign: 'center', marginBottom: '100px', color: 'white' }}>
              <Title level={2} style={{ color: 'white', marginBottom: '40px' }}>{t('download.trust.title')}</Title>
              <Paragraph style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', maxWidth: '800px', margin: '0 auto 40px' }}>{t('download.trust.desc')}</Paragraph>
              <Row gutter={[24, 24]} justify="center">
                {[
                  { icon: <SafetyOutlined />, label: 'Bảo mật dữ liệu' },
                  { icon: <StarOutlined />, label: 'Không quảng cáo' },
                  { icon: <AndroidOutlined />, label: 'Mã nguồn minh bạch' }
                ].map((item, idx) => (
                  <Col key={idx} xs={12} sm={8} md={6}>
                    <div className="trust-badge" style={{ padding: '24px 16px', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>
                      <div style={{ fontSize: '32px', marginBottom: '12px', color: '#3fcf8e' }}>{item.icon}</div>
                      <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.label}</Text>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </AnimatedSection>

          {/* Section 4 */}
          <AnimatedSection delay={50}>
            <Row gutter={[48, 48]} style={{ marginBottom: '100px', textAlign: 'center' }}>
              <Col xs={24} md={8} className="stat-card">
                <Title level={1} style={{ color: 'var(--primary-color)', margin: 0, fontSize: '48px' }}>
                  <Counter value={1000} suffix="+" />
                </Title>
                <Text strong style={{ fontSize: '18px' }}>{t('download.stats.downloads')}</Text>
              </Col>
              <Col xs={24} md={8} className="stat-card">
                <Title level={1} style={{ color: '#3fcf8e', margin: 0, fontSize: '48px' }}>
                  <Counter value={500} suffix="+" />
                </Title>
                <Text strong style={{ fontSize: '18px' }}>{t('download.stats.reports')}</Text>
              </Col>
              <Col xs={24} md={8} className="stat-card">
                <Title level={1} style={{ color: '#00d2ff', margin: 0, fontSize: '48px' }}>
                  <Counter value={90} suffix="%" />
                </Title>
                <Text strong style={{ fontSize: '18px' }}>{t('download.stats.accuracy')}</Text>
              </Col>
            </Row>
          </AnimatedSection>

          {/* Section 5 */}
          <AnimatedSection delay={50}>
            <Row gutter={[64, 64]} align="middle" style={{ marginBottom: '60px' }}>
              <Col xs={24} md={12}>
                <Title level={2} className="hover-title" style={{ fontSize: '38px', color: 'var(--primary-color)', marginBottom: '32px' }}>{t('download.ai.core.title')}</Title>
                <div style={{ width: '80px', height: '5px', background: 'linear-gradient(90deg, #1349ec, #3fcf8e)', margin: '0 0 32px 0', borderRadius: '5px' }} className="responsive-line" />
                <Paragraph className="hover-text" style={{ fontSize: '19px', lineHeight: '2', opacity: 0.8, marginBottom: '40px' }}>{t('download.ai.core.desc')}</Paragraph>
              </Col>
              <Col xs={24} md={12}>
                <div style={{ borderRadius: '32px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={aiSolutionImg} alt="AI Solutions" style={{ width: '100%', height: 'auto', borderRadius: '32px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }} />
                </div>
              </Col>
            </Row>
          </AnimatedSection>

          {/* Tech Stack */}
          <AnimatedSection delay={50}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <Divider dashed><Text style={{ color: 'var(--primary-color)', fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>{t('download.tech.title')}</Text></Divider>
            </div>
            <div className="marquee-container">
              <div className="marquee-content">
                {[
                  { name: 'React', color: '#61DAFB' }, { name: 'Node.js', color: '#339933' }, { name: 'PostgreSQL', color: '#336791' },
                  { name: 'TensorFlow', color: '#FF6F00' }, { name: 'Python', color: '#3776AB' }, { name: 'FastAPI', color: '#05998B' },
                  { name: 'React', color: '#61DAFB' }, { name: 'Node.js', color: '#339933' }, { name: 'PostgreSQL', color: '#336791' },
                  { name: 'TensorFlow', color: '#FF6F00' }, { name: 'Python', color: '#3776AB' }, { name: 'FastAPI', color: '#05998B' },
                ].map((tech, idx) => (
                  <div key={idx} className="marquee-item" style={{ color: tech.color }}>
                    <ApiOutlined style={{ marginRight: '10px' }} />
                    <span style={{ fontWeight: 600 }}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
