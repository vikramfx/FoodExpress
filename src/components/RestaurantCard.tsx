import React from 'react';
import { Card, Rate } from 'antd';
import { Link } from 'react-router-dom';

interface RestaurantCardProps {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  imageUrl: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ id, name, cuisine, rating, imageUrl }) => {
  return (
    <Link to={`/restaurant/${id}`}>
      <Card
        hoverable
        cover={<img alt={name} src={imageUrl} className="h-48 object-cover" />}
        className="w-full"
      >
        <Card.Meta
          title={name}
          description={
            <div>
              <p>{cuisine}</p>
              <Rate disabled defaultValue={rating} />
            </div>
          }
        />
      </Card>
    </Link>
  );
};

export default RestaurantCard;