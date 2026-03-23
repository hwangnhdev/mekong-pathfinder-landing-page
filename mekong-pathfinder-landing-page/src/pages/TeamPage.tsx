import React, { useState } from 'react';
import { Row, Col, Typography, Card, Avatar, Tag, Button, Space, Modal, Tooltip, Divider } from 'antd';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Layers, Download, ExternalLink, Mail, Github, Linkedin, Briefcase, Award } from 'lucide-react';
import teamWorkingImg from '../assets/images/about-us/z7636181854790_44fdf03d1e07bc824805c7e982282259.jpg';

const { Title, Paragraph, Text } = Typography;

interface TeamMember {
  name: string;
  role: string;
  quote: string;
  filename: string;
  color: string;
  skills: string[];
  bio: string;
  links: {
    linkedin?: string;
    github?: string;
    email?: string;
    cv?: string;
  };
}

const TeamPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Dynamic Asset Imports
  const memberImagesGlob = import.meta.glob('../assets/images/members/*.{png,jpg,jpeg,webp}', { eager: true });

  const getAssetUrl = (glob: any, filename: string) => {
    const match = Object.keys(glob).find(path => path.endsWith(filename));
    return match ? (glob[match] as any).default : '';
  };

  const members: TeamMember[] = [
    {
      name: 'Trân',
      role: 'UX/UI Designer',
      quote: 'Kiến tạo trải nghiệm người dùng tinh tế và hiệu quả.',
      filename: 'Picsart_26-03-23_09-01-03-867.png',
      color: '#fadb14',
      skills: ['UI/UX Design', 'User Research', 'Figma'],
      bio: 'Chuyên gia thiết kế trải nghiệm người dùng, đảm bảo ứng dụng Mekong Pathfinder luôn dễ sử dụng và thân thiện nhất với cộng đồng.',
      links: { email: 'tran@example.com', cv: '#' }
    },
    {
      name: 'Thảo',
      role: 'Truyền thông đa phương tiện',
      quote: 'Lan tỏa giá trị dự án qua những hình ảnh sống động.',
      filename: 'Picsart_26-03-23_09-01-22-698.png',
      color: '#3fcf8e',
      skills: ['Multimedia', 'Branding', 'Content Strategy'],
      bio: 'Chịu trách nhiệm về hình ảnh, video và các chiến dịch truyền thông đa phương tiện, giúp dự án tiếp cận sâu rộng đến người dân.',
      links: { linkedin: '#', cv: '#' }
    },
    {
      name: 'Quỳnh',
      role: 'AI Engineering & Project Lead',
      quote: 'Mekong Pathfinder là tâm huyết và tương lai của chúng tôi.',
      filename: 'Picsart_26-03-23_08-58-16-479.png',
      color: '#1349ec',
      skills: ['AI/ML', 'Project Leader', 'Agile'],
      bio: 'Dẫn dắt dự án và trực tiếp nghiên cứu, phát triển mảng trí tuệ nhân tạo (AI) cốt lõi của hệ thống điều hướng.',
      links: { linkedin: '#', email: 'quynh@example.com', cv: '#' }
    },
    {
      name: 'Vui',
      role: 'Project Manager & Fullstack Developer',
      quote: 'Quản lý linh hoạt, phát triển bền vững.',
      filename: 'Picsart_26-03-23_09-07-27-394.png',
      color: '#722ed1',
      skills: ['Project Management', 'Fullstack Developer', 'System Logic'],
      bio: 'Điều phối tiến độ dự án và tham gia phát triển mã nguồn, đảm bảo sự ổn định và hiệu năng cao nhất của ứng dụng.',
      links: { github: '#', cv: '#' }
    },
    {
      name: 'Hoàng',
      role: 'Solution Architect & Fullstack Developer',
      quote: 'Xây dựng nền tảng vững chắc cho mọi giải pháp công nghệ.',
      filename: 'Picsart_26-03-23_09-00-44-512.png',
      color: '#00d2ff',
      skills: ['System Architecture', 'Fullstack Developer', 'GIS'],
      bio: 'Kiến trúc sư hệ thống, phụ trách phát triển toàn diện từ Backend đến Frontend và hạ tầng dữ liệu của dự án.',
      links: { github: '#', linkedin: '#', cv: '#' }
    },
  ];

  return (
    <div className="section-padding" style={{ paddingTop: 120 }}>
      <style>{`
        .member-card {
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #f0f0f0;
          border-radius: 24px;
          height: 100%;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
          display: flex;
          flex-direction: column;
          will-change: transform;
          contain: layout;
        }
        .member-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
          border-color: #f0f0f0;
        }
        .member-avatar-container {
          padding: 30px 20px 15px;
          display: flex;
          justify-content: center;
          position: relative;
        }
        .member-avatar-bg {
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: #f5f5f5;
          opacity: 1;
          z-index: 0;
          pointer-events: none;
        }
        .skill-tag {
          margin: 4px;
          border-radius: 8px;
          padding: 2px 10px;
          font-weight: 500;
        }
        .action-overlay {
          margin-top: auto;
          padding: 20px;
          background: #fafafa;
          border-top: 1px solid #f0f0f0;
        }
        /* Custom style for avatar image positioning */
        .member-avatar-img img {
          object-position: top !important;
        }
      `}</style>

      <div className="aura-glow aura-top-right" />

      <Row gutter={[48, 48]} align="middle" style={{ marginBottom: 120 }}>
        <Col xs={24} lg={12}>
          <div style={{ textAlign: 'center', marginBottom: 100 }}>
            <Title level={1} className="poppins" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', maxWidth: 1000, margin: '0 auto 24px' }}>
              {t('team.hero')}
            </Title>
            <div style={{ width: 80, height: 4, background: 'var(--primary-color)', margin: '0 auto' }} />
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            src={teamWorkingImg}
            alt="Team working"
            style={{ width: '100%', borderRadius: 32, boxShadow: '0 30px 60px rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.1)' }}
          />
        </Col>
      </Row>

      <div style={{ marginBottom: 120 }}>
        <Title level={2} className="poppins" style={{ textAlign: 'center', marginBottom: 10, fontSize: '2.5rem' }}>Đội ngũ nòng cốt</Title>
        <div style={{ width: 100, height: 4, background: 'var(--primary-color)', margin: '30px auto' }} />
        <Row gutter={[16, 32]} justify="center" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {members.map((m, i) => (
            <Col key={i} style={{ flex: '1 1 0%', minWidth: '200px', maxWidth: '300px' }}>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                style={{ height: '100%' }}
              >
                <Card className="member-card" bodyStyle={{ padding: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="member-avatar-container">
                    <div className="member-avatar-bg" />
                    <Avatar
                      size={140}
                      className="member-avatar-img"
                      src={getAssetUrl(memberImagesGlob, m.filename)}
                      style={{
                        background: '#ffffff',
                        // border: `4px solid #f0f0f0`,
                        // boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                        zIndex: 1
                      }}
                    >
                      {!getAssetUrl(memberImagesGlob, m.filename) && m.name[0]}
                    </Avatar>
                  </div>

                  <div style={{ padding: '0 24px 24px', textAlign: 'center' }}>
                    <Title level={3} style={{ marginBottom: 4, marginTop: 10 }}>{m.name}</Title>
                    <Text strong style={{ color: 'var(--primary-color)', letterSpacing: 1, textTransform: 'uppercase', fontSize: '0.8rem', display: 'block', marginBottom: 16 }}>
                      {m.role}
                    </Text>
                    <Paragraph style={{ fontStyle: 'italic', opacity: 0.7, fontSize: '0.9rem', minHeight: 60 }}>
                      "{m.quote}"
                    </Paragraph>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 20 }}>
                      {m.skills.slice(0, 2).map(skill => (
                        <Tag key={skill} className="skill-tag" color="blue">
                          {skill}
                        </Tag>
                      ))}
                    </div>
                  </div>
{/* 
                  <div className="action-overlay">
                    <Space direction="vertical" style={{ width: '100%' }} size="small">
                      <Button
                        block
                        type="primary"
                        shape="round"
                        icon={<Award size={16} />}
                        onClick={() => setSelectedMember(m)}
                      >
                        Xem năng lực
                      </Button>
                      <Button
                        block
                        ghost
                        shape="round"
                        icon={<Download size={16} />}
                        style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}
                      >
                        Tải CV (PDF)
                      </Button>
                    </Space>
                  </div> */}
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Member Details Modal */}
      <Modal
        open={!!selectedMember}
        onCancel={() => setSelectedMember(null)}
        footer={null}
        width={700}
        centered
        styles={{ content: { padding: 0, borderRadius: 24, overflow: 'hidden' } }}
      >
        {selectedMember && (
          <div style={{ background: 'var(--glass-bg-light)', position: 'relative' }}>
            <div style={{ height: 120, background: `linear-gradient(135deg, ${selectedMember.color} 0%, #001d66 100%)` }} />
            <div style={{ padding: '0 40px 40px', marginTop: -60 }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24, marginBottom: 30 }}>
                <Avatar
                  size={120}
                  src={getAssetUrl(memberImagesGlob, selectedMember.filename)}
                  style={{ border: '4px solid white', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                >
                  {selectedMember.name[0]}
                </Avatar>
                <div style={{ paddingBottom: 10 }}>
                  <Title level={2} style={{ marginBottom: 4 }}>{selectedMember.name}</Title>
                  <Tag color="blue" style={{ fontSize: '1rem', padding: '4px 12px' }}>{selectedMember.role}</Tag>
                </div>
              </div>

              <Row gutter={[40, 40]}>
                <Col xs={24} md={14}>
                  <Title level={4}><Briefcase size={20} style={{ verticalAlign: 'middle', marginRight: 10 }} /> Giới thiệu</Title>
                  <Paragraph style={{ fontSize: '1.1rem', opacity: 0.8 }}>{selectedMember.bio}</Paragraph>

                  <Divider />

                  <Title level={4}><ExternalLink size={20} style={{ verticalAlign: 'middle', marginRight: 10 }} /> Kết nối</Title>
                  <Space size="large">
                    {selectedMember.links.linkedin && (
                      <Tooltip title="LinkedIn">
                        <Button shape="circle" icon={<Linkedin size={20} />} style={{ background: '#0077b5', color: 'white' }} />
                      </Tooltip>
                    )}
                    {selectedMember.links.github && (
                      <Tooltip title="GitHub">
                        <Button shape="circle" icon={<Github size={20} />} style={{ background: '#333', color: 'white' }} />
                      </Tooltip>
                    )}
                    {selectedMember.links.email && (
                      <Tooltip title="Email">
                        <Button shape="circle" icon={<Mail size={20} />} style={{ background: '#ff4d4f', color: 'white' }} />
                      </Tooltip>
                    )}
                  </Space>
                </Col>
                <Col xs={24} md={10}>
                  <div className="glass-panel" style={{ padding: 24, borderRadius: 20 }}>
                    <Title level={4}><Layers size={20} style={{ verticalAlign: 'middle', marginRight: 10 }} /> Kỹ năng</Title>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      {selectedMember.skills.map(skill => (
                        <Tag key={skill} style={{ margin: '0 8px 8px 0', fontSize: '0.9rem', padding: '4px 12px' }}>{skill}</Tag>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        )}
      </Modal>

      <div style={{ textAlign: 'center' }}>
        <div className="aura-glow aura-bottom-left" />
        <Title level={2} className="poppins" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
          {t('team.vision')}
        </Title>
        <div style={{ width: 100, height: 4, background: 'var(--primary-color)', margin: '30px auto' }} />
      </div>
    </div>
  );
};

export default TeamPage;
