
import { Menu } from 'antd';
import { PieChartOutlined, UserOutlined, DesktopOutlined, GiftOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useState } from 'react';
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
const Sider = () => {


    const [collapsed, setCollapsed] = useState(false);
    return (
   
            
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>

     



    )
}
export default Sider;