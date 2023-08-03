import { PieChartOutlined, UserOutlined,DesktopOutlined,ShoppingCartOutlined,GiftOutlined,UserSwitchOutlined,HomeOutlined} from '@ant-design/icons';
import {  Layout, Menu, theme } from 'antd';
import { NavLink, Outlet } from "react-router-dom";
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
  getItem('Dashboard ', '1',<NavLink to="/"> <PieChartOutlined /></NavLink>),
  getItem('Product', '2', <NavLink to="/product"><DesktopOutlined /></NavLink>),
  getItem('User', '3', <NavLink to="/user"><UserSwitchOutlined /></NavLink>),
  getItem('Customer', '4', <NavLink to="/customer"><UserOutlined/></NavLink>),
  getItem('Motel','5',<NavLink to="/motel"><HomeOutlined /></NavLink>)
  //getItem('Order', '5', <NavLink to="/other"><ShoppingCartOutlined /></NavLink>),
 // getItem('Coupon', '6',<NavLink to="/coupon"><GiftOutlined /></NavLink> )
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
             <Outlet/>
           
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