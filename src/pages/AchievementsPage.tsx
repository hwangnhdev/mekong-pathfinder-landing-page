import React from 'react';
import { Typography, Tag, Badge, Space, Row, Col, Card } from 'antd';
import { Calendar, Share2, Eye, MessageCircle, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import vinhdanhImg from '../assets/images/d/Screenshot_2026-03-23_124429.png';
import quanquanImg from '../assets/images/d/Screenshot_2026-03-23_124546.png';
import goivonImg from '../assets/images/d/z7609403711381_a9d1eae8203c045f4a92437231c1d112.jpg';
import camDauImg from '../assets/images/d/z7647955671785_98936622c47d9478792f5f1e089f019c.jpg';
import triAnTesterImg from '../assets/images/d/z7647955076216_4c4927c8342292d8d9b6f24b005623ac.jpg';

const { Title, Paragraph, Text } = Typography;

const AchievementsPage: React.FC = () => {
  const { t } = useLanguage();
  // Asset Imports
  const postImagesGlob = import.meta.glob('../assets/images/activities-fanpage/*.{png,jpg,jpeg,webp}', { eager: true });

  const postImages = Object.values(postImagesGlob).map((mod: any) => mod.default);

  // Section 1: Journey (Hành trình) - Extensive real posts
  // Section 1: Journey (Hành trình) - Extensive real posts
  const journeyActivities = [
    {
      title: '🎥 Camera đầu tiên đã được lắp đặt',
      category: 'Công nghệ',
      date: '19/03/2026',
      stats: { views: '1.5k', shares: '1', comments: '14' },
      summary: 'Dấu mốc quan trọng khi hệ thống camera giám sát thông minh đầu tiên được lắp đặt thành công hỗ trợ dữ liệu thời gian thực.',
      link: 'https://www.facebook.com/reel/1463226508690773/',
      image: camDauImg
    },
    {
      title: 'Tri ân những Tester đầu tiên',
      category: 'Cộng đồng',
      date: '21/03/2026',
      stats: { views: '1.2k', shares: '1', comments: '6' },
      summary: 'Mekong Pathfinder gửi lời cảm ơn chân thành đến những người dùng đầu tiên đã trải nghiệm và đóng góp ý kiến quý báu.',
      link: 'https://www.facebook.com/mekongpathfinder/posts/pfbid0gvLTiP5YB8BUyrH6FY5nKd61vjqWeyChuYym11ySLaNt6DrXuucdhQ1CLcqq9PMyl',
      image: triAnTesterImg
    },
    {
      title: 'Khảo sát thực địa điểm ngập',
      category: 'Thực địa',
      date: '25/01/2026',
      stats: { views: '850', shares: '2', comments: '7' },
      summary: 'Hình ảnh team thực hiện đo đạc thực tế tại các tuyến đường thường xuyên bị triều cường bủa vây.',
      link: 'https://www.facebook.com/mekongpathfinder/'
    },
    {
      title: 'Tuyển tình nguyện viên thử nghiệm',
      category: 'Tuyển dụng',
      date: '10/01/2026',
      stats: { views: '2.1k', shares: '12', comments: '30' },
      summary: 'Tìm kiếm những người bạn đồng hành nhiệt huyết để kiểm thử ứng dụng trong điều kiện ngập lụt thực tế.',
      link: 'https://www.facebook.com/mekongpathfinder/'
    },
    {
      title: 'Ra mắt phiên bản Web (Beta)',
      category: 'Sản phẩm',
      date: '25/02/2026',
      stats: { views: '2.8k', shares: '8', comments: '25' },
      summary: 'Nền tảng Web chính thức hoạt động, giúp theo dõi điểm ngập trực tiếp trên máy tính.',
      link: 'https://www.facebook.com/mekongpathfinder/'
    },
    {
      title: 'Kiểm tra hệ thống cảm biến',
      category: 'Kỹ thuật',
      date: '20/12/2025',
      stats: { views: '600', shares: '1', comments: '4' },
      summary: 'Thử nghiệm độ bền và độ chính xác của cảm biến mực nước trong môi trường khắc nghiệt.',
      link: 'https://www.facebook.com/mekongpathfinder/'
    },
    {
      title: 'Nâng cấp hệ thống & Máy chủ',
      category: 'Thông báo',
      date: '15/02/2026',
      stats: { views: '400', shares: '0', comments: '2' },
      summary: 'Bảo trì định kỳ để chuẩn bị cho việc tích hợp tính năng dự báo AI chuyên sâu.',
      link: 'https://www.facebook.com/mekongpathfinder/'
    },
    {
      title: 'Phủ sóng camera ra ngoại thành',
      category: 'Chiến dịch',
      date: '15/12/2025',
      stats: { views: '1.3k', shares: '4', comments: '9' },
      summary: 'Kế hoạch mở rộng mạng lưới giám sát tới các khu vực vùng ven thành phố Cần Thơ.',
      link: 'https://www.facebook.com/mekongpathfinder/'
    }
  ];

  // Section 2: Achievements (Thành tựu) - 3 Key wins
  const achievementActivities = [
    {
      title: 'Gọi vốn thành công 50 triệu VNĐ',
      category: 'Đầu tư',
      date: '30/11/2025',
      stats: { views: '3.8k', shares: '18', comments: '45' },
      summary: 'Hợp tác thành công với trường ĐH FPT, nhận gói tài trợ 50 triệu đồng để tiếp tục phát triển và phủ sóng dự án tại Cần Thơ.',
      link: '#',
      image: goivonImg
    },
    {
      title: 'Quán quân Business Challenge 2025',
      category: 'Thành tựu',
      date: '09/12/2025',
      stats: { views: '5.2k', shares: '25', comments: '60' },
      summary: 'Vượt qua nhiều đội thi xuất sắc để giành ngôi vị Quán quân tại cuộc thi khởi nghiệp quy mô lớn, khẳng định giá trị thực tiễn của dự án.',
      link: 'https://www.facebook.com/share/p/1E96iJeydh/',
      image: quanquanImg
    },
    {
      title: 'Vinh danh tại Lễ tôn vinh kỳ Fall 2025',
      category: 'Vinh danh',
      date: '18/03/2026',
      stats: { views: '2.5k', shares: '12', comments: '45' },
      summary: 'Dự án vinh dự nhận giải thưởng danh giá vì những đóng góp tích thực cho cộng đồng tại sự kiện Tôn vinh sinh viên.',
      link: 'https://www.facebook.com/share/p/1Gng13KRHk/',
      image: vinhdanhImg
    }
  ];

  const SocialCard = ({ item, index }: { item: any, index: number }) => (
    <Card
      className="glass-panel"
      styles={{ body: { padding: 'clamp(20px, 4vw, 30px)' } }}
      style={{ overflow: 'hidden', borderRadius: 32, border: 'none', height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ marginBottom: 20, overflow: 'hidden', borderRadius: 20 }}>
        <img
          src={item.image ? item.image : postImages[index % postImages.length]}
          alt="achievement"
          style={{ width: '100%', height: 300, objectFit: 'cover' }}
        />
      </div>

      <div style={{ flex: 1 }}>
        <Space style={{ marginBottom: 16 }}>
          <Tag color="blue" style={{ borderRadius: 100, padding: '2px 14px', fontSize: '0.8rem' }}>{item.category}</Tag>
          <Badge status="processing" text={<Text type="secondary" style={{ fontSize: '0.8rem' }}><Calendar size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />{item.date}</Text>} />
        </Space>

        <Title level={4} className="poppins" style={{ marginBottom: 16, fontSize: '1.25rem' }}>{item.title}</Title>
        <Paragraph style={{ opacity: 0.7, lineHeight: 1.6, marginBottom: 24 }} ellipsis={{ rows: 3 }}>
          {item.summary}
        </Paragraph>
      </div>

      <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Space size="middle" style={{ opacity: 0.8 }}>
          <Space size={4}><Eye size={18} /> <Text strong>{item.stats.views}</Text></Space>
          <Space size={4}><Share2 size={18} /> <Text strong>{item.stats.shares}</Text></Space>
          <Space size={4}><MessageCircle size={18} /> <Text strong>{item.stats.comments}</Text></Space>
        </Space>

        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <Text strong style={{ color: 'var(--primary-color)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
            <ExternalLink size={16} />
          </Text>
        </a>
      </div>
    </Card>
  );

  return (
    <div className="section-padding" style={{ paddingTop: 120 }}>
      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: 80 }}>
        <Title level={1} className="poppins" style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: 700 }}>
          {t('achievements.hero')}
        </Title>
        <Paragraph style={{ fontSize: '1.2rem', opacity: 0.7, maxWidth: 800, margin: '0 auto' }}>
          {t('achievements.desc')}
        </Paragraph>
      </div>

      {/* Section 1: Achievements (Thành tựu) - Grid of 3 */}
      <section style={{ marginBottom: 110 }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <Title level={2} className="poppins" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: 16 }}>
            {t('achievements.success')}
          </Title>
          <div style={{ width: 80, height: 4, background: 'var(--primary-color)', margin: '0 auto 24px' }} />
        </div>

        <Row gutter={[30, 30]}>
          {achievementActivities.map((item, index) => (
            <Col xs={24} lg={8} key={index}>
              <SocialCard item={item} index={index + 10} />
            </Col>
          ))}
        </Row>
      </section>

      {/* Section 2: Journey (Hành trình) - Swiper Slider */}
      <section>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <Title level={2} className="poppins" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: 16 }}>
            {t('achievements.journey')}
          </Title>
          <div style={{ width: 80, height: 4, background: 'var(--primary-color)', margin: '0 auto 24px' }} />
        </div>

        <div style={{ position: 'relative' }}>
          <div id="journey-prev" style={{ position: 'absolute', left: -20, top: '50%', transform: 'translateY(-50%)', zIndex: 10, cursor: 'pointer', background: 'white', width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <ChevronLeft size={24} />
          </div>
          <div id="journey-next" style={{ position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)', zIndex: 10, cursor: 'pointer', background: 'white', width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <ChevronRight size={24} />
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{ prevEl: '#journey-prev', nextEl: '#journey-next' }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }}
            style={{ padding: '20px 0 60px' }}
          >
            {journeyActivities.map((item, index) => (
              <SwiperSlide key={index}>
                <SocialCard item={item} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <style>{`
        .swiper-pagination-bullet-active { background: var(--primary-color) !important; }
        .swiper-slide { height: auto !important; }
        @media (max-width: 600px) {
            #journey-prev, #journey-next, #achievement-prev, #achievement-next { display: none; }
        }
      `}</style>
    </div>
  );
};

export default AchievementsPage;
