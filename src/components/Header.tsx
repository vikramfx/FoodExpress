import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeIcon, ShoppingCartIcon, UserIcon } from 'lucide-react';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const menuItems = [
    {
      key: 'home',
      icon: <HomeIcon size={18} />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: 'cart',
      icon: <ShoppingCartIcon size={18} />,
      label: <Link to="/cart">Cart</Link>,
    },
    {
      key: 'account',
      icon: <UserIcon size={18} />,
      label: <Link to="/account">Account</Link>,
    },
  ];

  return (
    <AntHeader className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">FoodExpress</Link>
        <Menu mode="horizontal" items={menuItems} className="border-0" />
      </div>
    </AntHeader>
  );
};

export default Header;