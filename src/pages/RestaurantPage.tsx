import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Row, Col } from 'antd';
import MenuItem from '../components/MenuItem';
import { restaurants, menuItems } from '../data/dummyData';

const { Title } = Typography;

const RestaurantPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find(r => r.id === id);

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="container mx-auto">
      <Title level={2}>{restaurant.name}</Title>
      <p className="mb-6">{restaurant.cuisine}</p>
      <Row gutter={[16, 16]}>
        {menuItems.map((item) => (
          <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
            <MenuItem {...item} onAddToCart={() => console.log('Added to cart:', item.name)} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RestaurantPage;