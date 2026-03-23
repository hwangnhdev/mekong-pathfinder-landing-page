import React, { useState } from 'react';
import { Row, Col, Typography, Form, Input, Button, Radio, List, Avatar, message, Card, Tag } from 'antd';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Send, Bug, Lightbulb, Droplets, MessageSquare } from 'lucide-react';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const FeedbackPage: React.FC = () => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);

  const feedbacks = [
    { name: 'Minh Tuấn', type: 'flood', content: 'Đường Nguyễn Văn Cừ đoạn trước ĐH Y Dược đang ngập sâu, mọi người nên tránh.', time: '10 phút trước' },
    { name: 'Thu Thảo', type: 'idea', content: 'Nên thêm tính năng dự báo triều cường theo tuần để dân dễ sắp xếp công việc.', time: '1 giờ trước' },
    { name: 'Hoàng Nam', type: 'bug', content: 'Nút báo ngập thỉnh thoảng bị đứng khi load map trên Android.', time: '3 giờ trước' },
  ];

  const onFinish = (values: any) => {
    setLoading(true);
    console.log('Values:', values);
    setTimeout(() => {
      message.success('Cảm ơn bạn! Góp ý của bạn đã được gửi đến đội ngũ sinh viên chúng tôi.');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="section-padding" style={{ paddingTop: 120 }}>
      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: 80 }}>
        <Title level={1} className="poppins" style={{ fontSize: 'clamp(2.3rem, 6vw, 3.5rem)', maxWidth: 900, margin: '0 auto 24px' }}>
          {t('feedback.hero')}
        </Title>
      </div>

      <Row gutter={[64, 64]}>
        {/* Form Column */}
        <Col xs={24} lg={12}>
           <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="glass-panel" style={{ padding: 'clamp(20px, 5vw, 40px)' }}>
              <Form layout="vertical" onFinish={onFinish} size="large">
                 <Form.Item name="type" label={<Text strong>Loại góp ý</Text>} initialValue="flood">
                    <Radio.Group style={{ width: '100%' }}>
                       <Row gutter={12}>
                          <Col span={8}>
                             <Radio.Button value="bug" style={{ width: '100%', textAlign: 'center', height: 'auto', padding: '10px 0' }}>
                                <Bug size={18} /><br/><Text style={{ fontSize: '12px' }}>{t('feedback.type.bug')}</Text>
                             </Radio.Button>
                          </Col>
                          <Col span={8}>
                             <Radio.Button value="idea" style={{ width: '100%', textAlign: 'center', height: 'auto', padding: '10px 0' }}>
                                <Lightbulb size={18} /><br/><Text style={{ fontSize: '12px' }}>{t('feedback.type.idea')}</Text>
                             </Radio.Button>
                          </Col>
                          <Col span={8}>
                             <Radio.Button value="flood" style={{ width: '100%', textAlign: 'center', height: 'auto', padding: '10px 0' }}>
                                <Droplets size={18} /><br/><Text style={{ fontSize: '12px' }}>{t('feedback.type.flood')}</Text>
                             </Radio.Button>
                          </Col>
                       </Row>
                    </Radio.Group>
                 </Form.Item>

                 <Form.Item name="name" label={<Text strong>Họ tên</Text>} rules={[{ required: true }]}>
                    <Input placeholder="Nguyễn Văn A" style={{ background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                 </Form.Item>

                 <Form.Item name="email" label={<Text strong>Email</Text>} rules={[{ required: true, type: 'email' }]}>
                    <Input placeholder="email@example.com" />
                 </Form.Item>

                 <Form.Item name="content" label={<Text strong>Nội dung</Text>} rules={[{ required: true }]}>
                    <TextArea rows={6} placeholder="Chia sẻ câu chuyện hoặc vấn đề của bạn..." />
                 </Form.Item>

                 <Button type="primary" block icon={<Send size={18} />} loading={loading} htmlType="submit" style={{ height: 56 }}>
                    Gửi ngay
                 </Button>
              </Form>
           </motion.div>
        </Col>

        {/* Community List Column */}
        <Col xs={24} lg={12}>
           <Title level={3} className="poppins" style={{ marginBottom: 32 }}>Góp ý gần đây</Title>
           <List
             dataSource={feedbacks}
             renderItem={(item) => (
               <List.Item style={{ border: 'none', padding: 0, marginBottom: 20 }}>
                  <Card className="glass-panel" style={{ width: '100%', background: 'rgba(255,255,255,0.02)' }} styles={{ body: { padding: 20 } }}>
                     <div style={{ display: 'flex', gap: 16 }}>
                        <Avatar style={{ background: 'var(--primary-color)' }}>{item.name[0]}</Avatar>
                        <div style={{ flex: 1 }}>
                           <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                              <Text strong>{item.name}</Text>
                              <Text type="secondary" style={{ fontSize: '0.8rem' }}>{item.time}</Text>
                           </div>
                           <Paragraph style={{ marginBottom: 0 }}>{item.content}</Paragraph>
                           <div style={{ marginTop: 12 }}>
                              <Tag color={item.type === 'flood' ? 'blue' : item.type === 'bug' ? 'red' : 'gold'}>
                                 {t(`feedback.type.${item.type}`)}
                              </Tag>
                           </div>
                        </div>
                     </div>
                  </Card>
               </List.Item>
             )}
           />
           <div style={{ marginTop: 40, padding: 30, background: 'rgba(19, 73, 236, 0.05)', borderRadius: 20, textAlign: 'center' }}>
              <MessageSquare size={32} color="var(--primary-color)" style={{ marginBottom: 16 }} />
              <Paragraph style={{ fontStyle: 'italic', marginBottom: 0 }}>
                 "{t('feedback.msg')}"
              </Paragraph>
           </div>
        </Col>
      </Row>
    </div>
  );
};

export default FeedbackPage;
