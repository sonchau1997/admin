import { PieChartOutlined, UserOutlined,DesktopOutlined,ShoppingCartOutlined,GiftOutlined} from '@ant-design/icons';
import {  Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import {Helmet} from "react-helmet";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Dashboard ', '1', <PieChartOutlined />),
  getItem('Product', '2', <DesktopOutlined />),
  getItem('User', '3', <UserOutlined />),
  getItem('Order', '4', <ShoppingCartOutlined />,),
  getItem('Coupon', '5', <GiftOutlined />,),
];
const PrimaryLayout = ({children,title}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
     <Helmet>
        <title>{title}</title>
    </Helmet>
    <Layout
    
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
         
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
             {children}
           
          </div>
         
          
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
      
    
      <Layout
    
    style={{
      minHeight: '100vh',
    }}
  >
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="demo-logo-vertical" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Sider>
    <Layout>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      />
      <Content
        style={{
          margin: '0 16px',
        }}
      >
       
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
          }}
        >
           {children}
         
        </div>
       
        
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
    </>

  );
};
export default PrimaryLayout;