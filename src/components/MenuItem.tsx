import React from 'react';
import { Card, Button } from 'antd';

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  onAddToCart: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price, imageUrl, onAddToCart }) => {
  return (
    <Card
      hoverable
      cover={<img alt={name} src={imageUrl} className="h-40 object-cover" />}
      className="w-full"
    >
      <Card.Meta
        title={name}
        description={
          <div>
            <p>{description}</p>
            <p className="font-bold">${price.toFixed(2)}</p>
            <Button type="primary" onClick={onAddToCart}>Add to Cart</Button>
          </div>
        }
      />
    </Card>
  );
};

export default MenuItem;