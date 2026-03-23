import { Row, Col, Typography } from 'antd';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import { Droplets, LineChart, Share2, Navigation, Camera, HeartPulse } from 'lucide-react';

const { Title, Paragraph, Text } = Typography;

import viewMap from '../../assets/images/application/z7646280215380_7ec2347bd8213794c904d0592033ceea.jpg';

const HomeSolution: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    { icon: <Navigation size={20} color="#1349ec" />, label: t('app.features.ai') },
    { icon: <Droplets size={20} color="#00d2ff" />, label: t('app.features.realtime') },
    { icon: <Share2 size={20} color="#fadb14" />, label: t('app.features.community') },
    { icon: <LineChart size={20} color="#3fcf8e" />, label: t('app.features.weather') },
    { icon: <Camera size={20} color="#ff4d4f" />, label: t('app.features.camera') },
    { icon: <HeartPulse size={20} color="#eb2f96" />, label: t('app.features.sos') },
  ];

  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #fff 0%, #f0f7ff 100%)', padding: '100px 20px' }}>
      {/* Background Decor */}
      <div className="aura-glow aura-top-left" style={{ opacity: 0.1, transform: 'scale(1.5)' }} />
      <div className="aura-glow aura-bottom-right" style={{ opacity: 0.1, transform: 'scale(1.2)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Row gutter={[60, 80]} align="middle">
          {/* Left: Persuasive Content */}
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Text strong className="poppins" style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: 4, display: 'block', marginBottom: 20 }}>
                {t('preview.subtitle')}
              </Text>
              <Title level={2} className="poppins" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 30 }}>
                {t('solution.title')}
              </Title>
              <Paragraph style={{ fontSize: '1.2rem', opacity: 0.8, lineHeight: 1.8, marginBottom: 40, maxWidth: 500 }}>
                Sự kết hợp hoàn hảo giữa công nghệ AI và dữ liệu thực tế để bảo vệ mọi hành trình của bạn tại Cần Thơ.
              </Paragraph>

              {/* Feature Grid - Compact & Visual */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: 50 }}>
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', background: 'white', borderRadius: 16, boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}
                  >
                    <div style={{ background: 'rgba(19, 73, 236, 0.05)', padding: 10, borderRadius: 12, display: 'flex' }}>
                      {f.icon}
                    </div>
                    <Text strong style={{ fontSize: '0.9rem' }}>{f.label}</Text>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>

          {/* Right: Premium App Mockup */}
          <Col xs={24} lg={12}>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, type: "spring", damping: 15 }}
                style={{
                  perspective: 1200,
                  transformStyle: 'preserve-3d',
                  zIndex: 2
                }}
              >
                {/* iPhone Frame */}
                <div style={{
                  width: '320px',
                  height: '660px',
                  background: '#0a0a0a',
                  borderRadius: 48,
                  padding: '12px',
                  boxShadow: '0 50px 100px rgba(0,0,0,0.3)',
                  border: '6px solid #2a2a2a',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Internal Screen */}
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: '#fff',
                    borderRadius: 36,
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img
                      src={viewMap}
                      alt="Interface Map"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </div>

                  {/* Camera hole */}
                  <div style={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)', width: 100, height: 25, background: '#0a0a0a', borderRadius: '0 0 16px 16px' }} />
                </div>
              </motion.div>

              {/* Floating Widget 1: Community Reports (Right) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{ position: 'absolute', top: '15%', right: '-12%', zIndex: 3, background: 'rgba(255,255,255,0.9)', padding: '16px 20px', borderRadius: 24, boxShadow: '0 15px 35px rgba(0,0,0,0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.5)' }}
                className="hide-mobile"
              >
                <Row align="middle" gutter={12}>
                  <Col>
                    <div style={{ background: '#3fcf8e', padding: 10, borderRadius: 12 }}>
                      <Share2 color="white" size={20} />
                    </div>
                  </Col>
                  <Col>
                    <Title level={4} style={{ margin: 0, fontSize: '1.1rem' }}>5,000+</Title>
                    <Text type="secondary" style={{ fontSize: '0.75rem' }}>Báo cáo cộng đồng</Text>
                  </Col>
                </Row>
              </motion.div>

              {/* Floating Widget 2: Warning Points (Left) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                style={{ position: 'absolute', top: '45%', left: '-12%', zIndex: 3, background: 'rgba(255,255,255,0.9)', padding: '16px 20px', borderRadius: 24, boxShadow: '0 15px 35px rgba(0,0,0,0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.5)' }}
                className="hide-mobile"
              >
                <Row align="middle" gutter={12}>
                  <Col>
                    <div style={{ background: '#ff4d4f', padding: 10, borderRadius: 12 }}>
                      <Droplets color="white" size={20} />
                    </div>
                  </Col>
                  <Col>
                    <Title level={4} style={{ margin: 0, fontSize: '1.1rem' }}>1,200+</Title>
                    <Text type="secondary" style={{ fontSize: '0.75rem' }}>Điểm ngập cảnh báo</Text>
                  </Col>
                </Row>
              </motion.div>

              {/* Floating Widget 3: Accuracy (Right Bottom) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                style={{ position: 'absolute', bottom: '15%', right: '-8%', zIndex: 3, background: 'rgba(255,255,255,0.9)', padding: '16px 20px', borderRadius: 24, boxShadow: '0 15px 35px rgba(0,0,0,0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.5)' }}
                className="hide-mobile"
              >
                <Row align="middle" gutter={12}>
                  <Col>
                    <div style={{ background: 'var(--primary-color)', padding: 10, borderRadius: 12 }}>
                      <LineChart color="white" size={20} />
                    </div>
                  </Col>
                  <Col>
                    <Title level={4} style={{ margin: 0, fontSize: '1.1rem' }}>98%</Title>
                    <Text type="secondary" style={{ fontSize: '0.75rem' }}>Độ chính xác AI</Text>
                  </Col>
                </Row>
              </motion.div>
            </div>
          </Col>
        </Row>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .section-padding { padding: 60px 20px !important; }
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default HomeSolution;
