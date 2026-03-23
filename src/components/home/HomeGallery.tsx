import React from 'react';
import { Typography } from 'antd';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import { 
  TrophyOutlined, 
  RocketOutlined, 
  CloudUploadOutlined, 
  DatabaseOutlined, 
  NodeIndexOutlined, 
  GlobalOutlined, 
  CompassOutlined, 
  ArrowRightOutlined, 
  DownloadOutlined, 
  EyeOutlined, 
  MessageOutlined, 
  BugOutlined 
} from '@ant-design/icons';

const { Title } = Typography;

const HomeGallery: React.FC = () => {
  const { t } = useLanguage();

  // Load all images from the gallery folder
  const galleryImagesGlob = import.meta.glob('../../assets/images/gallery/*.{png,jpg,jpeg,webp,avif}', { eager: true });
  const galleryImages = Object.values(galleryImagesGlob).map((mod: any) => mod.default);

  const half = Math.ceil(galleryImages.length / 2);
  const row1 = galleryImages.slice(0, half);
  const row2 = galleryImages.slice(half);

  // Triple arrays to ensure seamless infinite looping correctly
  const track1 = [...row1, ...row1, ...row1];
  const track2 = [...row2, ...row2, ...row2];

  return (
    <div style={{
      position: 'relative',
      padding: '80px 0',
      width: '100vw',
      marginLeft: 'calc(50% - 50vw)',
      overflow: 'hidden',
      background: 'white'
    }}>
      {/* Dense Decorative Elements - Replicated from deploy project */}
      <div className="aura-blob aura-royal" style={{ left: '-20%', bottom: '-15%', width: '900px', height: '900px', opacity: 0.1, position: 'absolute' }} />
      <div className="aura-blob aura-purple" style={{ right: '-15%', top: '-10%', width: '600px', height: '600px', opacity: 0.08, position: 'absolute' }} />
      <div className="aura-blob aura-soft-blue" style={{ right: '25%', bottom: '-10%', width: '500px', height: '500px', opacity: 0.06, position: 'absolute' }} />

      {/* Grid Pattern Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'linear-gradient(rgba(19, 73, 236, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(19, 73, 236, 0.02) 1px, transparent 1px)', backgroundSize: '100px 100px', zIndex: -1 }}></div>

      {/* Floating Icons Background */}
      <div className="floating-icon-motif" style={{ right: '6%', top: '10%', fontSize: '48px', position: 'absolute' }}><TrophyOutlined /></div>
      <div className="floating-icon-motif" style={{ left: '4%', top: '25%', fontSize: '38px', position: 'absolute' }}><RocketOutlined /></div>
      <div className="floating-icon-motif" style={{ right: '15%', bottom: '30%', fontSize: '26px', position: 'absolute', opacity: 0.05 }}><CloudUploadOutlined /></div>
      <div className="floating-icon-motif" style={{ left: '10%', bottom: '20%', fontSize: '34px', position: 'absolute' }}><DatabaseOutlined /></div>
      <div className="floating-icon-motif" style={{ right: '25%', top: '40%', fontSize: '22px', position: 'absolute', opacity: 0.04 }}><NodeIndexOutlined /></div>
      <div className="floating-icon-motif" style={{ left: '20%', top: '15%', fontSize: '25px', position: 'absolute', opacity: 0.05 }}><GlobalOutlined /></div>
      <div className="floating-icon-motif" style={{ right: '40%', bottom: '8%', fontSize: '28px', position: 'absolute', opacity: 0.03 }}><CompassOutlined /></div>
      <div className="floating-icon-motif" style={{ left: '45%', top: '5%', fontSize: '20px', position: 'absolute', opacity: 0.03 }}><ArrowRightOutlined /></div>
      <div className="floating-icon-motif" style={{ left: '15%', top: '8%', fontSize: '22px', position: 'absolute', opacity: 0.04 }}><DownloadOutlined /></div>
      <div className="floating-icon-motif" style={{ right: '10%', bottom: '40%', fontSize: '30px', position: 'absolute', opacity: 0.05 }}><EyeOutlined /></div>
      <div className="floating-icon-motif" style={{ left: '30%', bottom: '10%', fontSize: '28px', position: 'absolute', opacity: 0.04 }}><MessageOutlined /></div>
      <div className="floating-icon-motif" style={{ right: '35%', top: '5%', fontSize: '18px', position: 'absolute', opacity: 0.03 }}><BugOutlined /></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Title
            level={2}
            className="poppins hover-title"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '800',
              color: 'var(--primary-color)',
              marginBottom: '16px'
            }}
          >
            {t('section.gallery')}
          </Title>
          <div style={{ width: '80px', height: '4px', background: 'var(--primary-color)', margin: '0 auto', borderRadius: '2px' }} />
        </div>

        {/* Gallery Infinite Marquee */}
        <div className="gallery-marquee-container">
          {/* Track 1 - Scrolls Left */}
          <div className="gallery-marquee-track track-left">
            {track1.map((img, index) => (
              <div className="gallery-item" key={`row1-${index}`}>
                <img src={img as string} alt={`Gallery item ${index}`} loading="lazy" />
              </div>
            ))}
          </div>

          {/* Track 2 - Scrolls Right */}
          <div className="gallery-marquee-track track-right">
            {track2.map((img, index) => (
              <div className="gallery-item" key={`row2-${index}`}>
                <img src={img as string} alt={`Gallery item ${index}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`
        /* Gallery Marquee Styles */
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-33.3333%); }
          100% { transform: translateX(0); }
        }
        .gallery-marquee-container {
          width: 100vw;
          margin-left: calc(50% - 50vw);
          display: flex;
          flex-direction: column;
          gap: 32px;
          padding: 30px 0;
          position: relative;
        }
        .gallery-marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
        }
        .gallery-marquee-track:hover {
          animation-play-state: paused;
        }
        .track-left {
          animation: scroll-left 100s linear infinite;
        }
        .track-right {
          animation: scroll-right 100s linear infinite;
        }
        .gallery-item {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          width: 320px;
          height: 220px;
          flex-shrink: 0;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .gallery-item:hover {
          transform: scale(1.15) translateY(-5px);
          box-shadow: 0 15px 40px rgba(19, 73, 236, 0.15);
          border-color: rgba(19, 73, 236, 0.4);
          z-index: 10;
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.4s ease;
        }
        
        @media (max-width: 768px) {
          .gallery-item {
            width: 220px;
            height: 150px;
          }
          .track-left, .track-right {
            animation-duration: 65s;
          }
          .gallery-marquee-track {
            gap: 16px;
          }
          .gallery-marquee-container {
             gap: 16px;
             padding: 20px 0;
          }
        }

        .aura-blob {
          position: absolute;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          filter: blur(140px);
          z-index: -1;
          opacity: 0.12;
          pointer-events: none;
          animation: aura-pulse 15s ease-in-out infinite alternate;
        }
        .aura-royal { background: radial-gradient(circle, #001d66 0%, transparent 70%); }
        .aura-soft-blue { background: radial-gradient(circle, #83b5fc 0%, transparent 70%); }
        .aura-purple { background: radial-gradient(circle, #722ed1 0%, transparent 70%); }
        
        @keyframes aura-pulse {
          0% { transform: scale(1) translate(0, 0); opacity: 0.1; }
          50% { transform: scale(1.3) translate(10%, -5%); opacity: 0.15; }
          100% { transform: scale(1.1) translate(-5%, 10%); opacity: 0.12; }
        }

        .floating-icon-motif {
          position: absolute;
          opacity: 0.08;
          color: var(--primary-color);
          pointer-events: none;
          z-index: 0;
          animation: smooth-float 10s ease-in-out infinite alternate;
        }

        @keyframes smooth-float {
          0% { transform: translateY(0) rotate(0); }
          100% { transform: translateY(-60px) rotate(15deg); }
        }
      `}</style>
    </div>
  );
};

export default HomeGallery;
