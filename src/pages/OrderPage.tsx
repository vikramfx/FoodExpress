import React from 'react';
import { Typography, Form, Input, Button, message } from 'antd';

const { Title } = Typography;

const OrderPage: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Order placed:', values);
    message.success('Order placed successfully!');
    form.resetFields();
  };

  return (
    <div className="container mx-auto">
      <Title level={2}>Place Your Order</Title>
      <Form
        form={form}
        name="order"
        onFinish={onFinish}
        layout="vertical"
        className="max-w-md"
      >
        <Form.Item
          name="name"
          label="Full Name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="address"
          label="Delivery Address"
          rules={[{ required: true, message: 'Please enter your address' }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[{ required: true, message: 'Please enter your phone number' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Place Order
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default OrderPage;