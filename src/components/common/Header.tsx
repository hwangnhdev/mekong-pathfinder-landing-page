import React from 'react';
import { Layout, Menu, Button, Space, Drawer } from 'antd';
import { useLanguage } from '../../context/LanguageContext';
import { Download, Menu as MenuIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/images/logo_header/logo-04.png';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  const menuItems = [
    { key: '/', label: <Link to="/">{t('nav.home')}</Link> },
    { key: '/achievements', label: <Link to="/achievements">Thành tựu</Link> },
    { key: '/team', label: <Link to="/team">{t('nav.team')}</Link> },
    { key: '/download', label: <Link to="/download">{t('nav.download')}</Link> },
    // { key: '/feedback', label: <Link to="/feedback">{t('nav.feedback')}</Link> },
  ];

  return (
    <AntHeader
      className="glass-header"
      style={{
        position: 'fixed',
        zIndex: 1000,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        height: '70px',
        lineHeight: '70px',
      }}
    >
      <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src={logo}
            alt="Mekong Pathfinder Logo"
            style={{ height: '50px', objectFit: 'contain' }}
          />
        </Link>
      </div>

      <div className="desktop-menu" style={{ flex: 1, display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
        <Menu
          mode="horizontal"
          disabledOverflow={true}
          items={menuItems}
          selectedKeys={[location.pathname]}
          style={{
            background: 'transparent',
            border: 'none',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            minWidth: 0,
          }}
        />
      </div>

      <Space size="middle">
        {/* <Select
          defaultValue={language}
          onChange={(val) => setLanguage(val as 'vi' | 'en')}
          variant="borderless"
          options={[
            { value: 'vi', label: 'VI' },
            { value: 'en', label: 'EN' },
          ]}
          style={{ width: 60 }}
        />

        <button
          onClick={toggleTheme}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            display: 'flex',
            color: mode === 'dark' ? 'white' : '#1a1a1a'
          }}
        >
          {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button> */}

        <Link to="/download" className="hide-mobile">
          <Button
            type="primary"
            shape="round"
            icon={<Download size={16} color="white" />}
            className="poppins"
            style={{ color: 'white' }}
          >
            {t('nav.download')}
          </Button>
        </Link>

        <Button
          className="show-mobile"
          type="text"
          icon={<MenuIcon size={24} />}
          onClick={() => setVisible(true)}
        />
      </Space>

      <Drawer
        title="Mekong Pathfinder"
        placement="right"
        onClose={() => setVisible(false)}
        open={visible}
        width={280}
        styles={{ body: { padding: 0 } }}
      >
        <Menu
          mode="vertical"
          items={menuItems}
          selectedKeys={[location.pathname]}
          onClick={() => setVisible(false)}
          style={{ border: 'none' }}
        />
        <div style={{ padding: 20 }}>
          <Link to="/download" onClick={() => setVisible(false)}>
            <Button type="primary" block shape="round" icon={<Download size={16} color="white" />} style={{ color: 'white' }}>
              {t('nav.download')}
            </Button>
          </Link>
        </div>
      </Drawer>

      <style>{`
        @media (max-width: 992px) {
          .desktop-menu { display: none !important; }
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 993px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </AntHeader>
  );
};

export default Header;
