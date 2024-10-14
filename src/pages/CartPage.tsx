import React from 'react';
import { Typography, List, Button, InputNumber } from 'antd';
import { Link } from 'react-router-dom';
import { cartItems } from '../data/dummyData';

const { Title } = Typography;

const CartPage: React.FC = () => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto">
      <Title level={2}>Your Cart</Title>
      <List
        itemLayout="horizontal"
        dataSource={cartItems}
        renderItem={(item) => (
          <List.Item
            actions={[
              <InputNumber
                min={1}
                max={10}
                defaultValue={item.quantity}
                onChange={(value) => console.log('Changed quantity:', value)}
              />,
              <Button type="link" danger onClick={() => console.log('Remove item:', item.name)}>
                Remove
              </Button>
            ]}
          >
            <List.Item.Meta
              title={item.name}
              description={`$${item.price.toFixed(2)}`}
            />
          </List.Item>
        )}
      />
      <div className="mt-8">
        <Title level={3}>Total: ${total.toFixed(2)}</Title>
        <Link to="/order">
          <Button type="primary" size="large">
            Proceed to Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;