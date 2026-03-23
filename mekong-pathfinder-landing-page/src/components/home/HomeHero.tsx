import React, { useState, useEffect } from 'react';
import { Typography, Button, Space, Grid } from 'antd';
import { useLanguage } from '../../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket } from 'lucide-react';


import FlipFlop from './FlipFlop';

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const HomeHero: React.FC = () => {
  const { t } = useLanguage();
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const [showSecondPart, setShowSecondPart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSecondPart(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 20px', position: 'relative', overflow: 'hidden' }}>
      <div className="aura-glow aura-center" />

      {/* CSS-coded Floating Flip-flops (Dép lào) - Now drifting horizontal */}
      <FlipFlop
        color="#ff4d4f"
        size={isMobile ? 65 : 110}
        style={{ top: isMobile ? '75vh' : '70vh' }}
        delay={0}
      />
      <FlipFlop
        color="#fadb14"
        size={isMobile ? 45 : 80}
        style={{ top: isMobile ? '78vh' : '75vh', opacity: 0.7 }}
        delay={15}
      />
      <FlipFlop
        color="#13c2c2"
        size={isMobile ? 55 : 95}
        style={{ top: isMobile ? '84vh' : '82vh', opacity: 0.5 }}
        delay={30}
      />

      {/* Realistic Animated SVG Waves */}
      <div style={{ position: 'absolute', bottom: -1, left: 0, width: '100%', height: '38vh', zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <svg
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          style={{ width: '200%', height: '100%', position: 'absolute', bottom: 0, left: 0 }}
        >
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <motion.use
              href="#gentle-wave"
              x="48" y="0"
              fill="rgba(19, 73, 236, 0.7)"
              animate={{ x: [-150, 150] }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            />
            <motion.use
              href="#gentle-wave"
              x="48" y="3"
              fill="rgba(19, 73, 236, 0.5)"
              animate={{ x: [-150, 150] }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            />
            <motion.use
              href="#gentle-wave"
              x="48" y="5"
              fill="rgba(255, 255, 255, 0.3)" // Foam layer
              animate={{ x: [-150, 150] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            />
            <motion.use
              href="#gentle-wave"
              x="48" y="7"
              fill="#1349ec" // Main dense water
              animate={{ x: [-150, 150] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            />
          </g>
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .parallax > use {
          animation-delay: -2s;
        }
      `}} />
      <div style={{ zIndex: 1, position: 'relative' }}>
        <AnimatePresence mode="wait">
          {!showSecondPart ? (
            <motion.div
              key="hook"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Title level={1} className="poppins" style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', fontWeight: 700 }}>
                {t('hero.hook1')}
              </Title>
              <Title level={1} className="poppins" style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', fontWeight: 700, color: 'var(--primary-color)' }}>
                {t('hero.hook2')}
              </Title>
            </motion.div>
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ maxWidth: 900 }}
            >
              <Title level={1} className="poppins" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 700, marginBottom: 24 }}>
                {t('hero.title')}
              </Title>

              <Space size="large" wrap style={{ justifyContent: 'center' }}>
                <a href="/download">
                  <Button type="primary" size="large" shape="round" icon={<Rocket size={20} />} style={{ height: 60, padding: '0 40px' }}>
                    {t('hero.cta.primary')}
                  </Button>
                </a>
                {/* <Button ghost size="large" shape="round" icon={<Info size={20} />} style={{ height: 60, padding: '0 40px' }}>
                  {t('hero.cta.secondary')}
                </Button> */}
              </Space>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        style={{ position: 'absolute', bottom: 40 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Text type="secondary">Scroll down to see the story</Text>
      </motion.div>
    </section>
  );
};

export default HomeHero;
