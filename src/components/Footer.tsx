import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer: React.FC = () => {
  return (
    <AntFooter className="text-center bg-gray-100">
      <p>FoodExpress ©2024 Created by Your Company</p>
    </AntFooter>
  );
};

export default Footer;