import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import { MapPinOff, Clock, Database, Wrench } from 'lucide-react';

import prob1Img from '../../assets/images/gallery/z7094515145153_ae28f46bf82b42321011b25fb08f5040.jpg';
import prob2Img from '../../assets/images/gallery/z7049466349135_0c75945d5eb408c5698235f1ebb408d0.jpg';
import prob3Img from '../../assets/images/gallery/z7095172112177_eb35a11418f307b408bbf8815048d6ce.jpg';
import prob4Img from '../../assets/images/gallery/OIP.jpg';

const { Title, Paragraph } = Typography;

const HomeProblem: React.FC = () => {
  const { t } = useLanguage();

  const problems = [
    {
      icon: <MapPinOff size={32} />,
      title: t('problem.1.title'),
      image: prob1Img,
      desc: 'Người dân không biết chính xác đoạn đường nào đang ngập sâu để tránh.'
    },
    {
      icon: <Clock size={32} />,
      title: t('problem.2.title'),
      image: prob2Img,
      desc: 'Việc di chuyển vào vùng ngập gây hư hỏng phương tiện và lãng phí hàng giờ đồng hồ.'
    },
    {
      icon: <Wrench size={32} />,
      title: 'Hư hỏng và cô lập',
      image: prob3Img,
      desc: 'Xe chết máy đột ngột giữa biển nước nhưng không thể tìm thấy tiệm sửa xe hay sự hỗ trợ kịp thời.'
    },
    {
      icon: <Database size={32} />,
      title: t('problem.3.title'),
      image: prob4Img,
      desc: 'Dữ liệu về tình trạng ngập chưa được hệ thống hóa để phục vụ quản lý đô thị.'
    },
  ];

  return (
    <section className="section-padding" style={{ background: 'rgba(0,0,0,0.01)', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <Title level={2} className="poppins" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
          {t('problem.title')}
        </Title>
        <div style={{ width: 80, height: 4, background: 'var(--primary-color)', margin: '20px auto' }} />
      </div>

      <Row gutter={[16, 24]}>
        {problems.map((p, i) => (
          <Col xs={24} md={12} lg={6} key={i}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              style={{ height: '100%' }}
            >
              <Card
                className="glass-panel"
                hoverable
                cover={
                  <div style={{ height: 300, overflow: 'hidden', position: 'relative' }}>
                    <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{
                      position: 'absolute',
                      top: 20,
                      right: 20,
                      background: 'rgba(255,255,255,0.9)',
                      padding: 12,
                      borderRadius: 12,
                      color: 'var(--primary-color)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}>
                      {p.icon}
                    </div>
                  </div>
                }
                style={{ borderRadius: 24, overflow: 'hidden', border: 'none', height: '100%' }}
                bodyStyle={{ height: 'calc(100% - 300px)', display: 'flex', flexDirection: 'column' }}
              >
                <Title level={4} className="poppins" style={{ marginBottom: 16 }}>{p.title}</Title>
                <Paragraph style={{ opacity: 0.7, fontSize: '1rem', flex: 1 }}>{p.desc}</Paragraph>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default HomeProblem;
