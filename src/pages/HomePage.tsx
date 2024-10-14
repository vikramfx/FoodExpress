import React, { useState } from 'react';
import { Typography, Row, Col, Input, Tabs, Card, List, Tag } from 'antd';
import { motion } from 'framer-motion';
import RestaurantCard from '../components/RestaurantCard';
import { restaurants, cuisines, popularDishes } from '../data/dummyData';

const { Title } = Typography;
const { Search } = Input;
const { TabPane } = Tabs;

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('1');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="container mx-auto">
      <Title level={2} className="mb-6">Find your favorite food</Title>
      <Search
        placeholder="Search for restaurants or cuisines"
        enterButton="Search"
        size="large"
        className="mb-8"
      />
      <Tabs activeKey={activeTab} onChange={setActiveTab} className="mb-8">
        <TabPane tab="Restaurants" key="1">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Row gutter={[16, 16]}>
              {restaurants.map((restaurant) => (
                <Col xs={24} sm={12} md={8} lg={6} key={restaurant.id}>
                  <motion.div variants={itemVariants}>
                    <RestaurantCard {...restaurant} />
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </TabPane>
        <TabPane tab="Cuisines" key="2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <List
              grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4 }}
              dataSource={cuisines}
              renderItem={(cuisine) => (
                <List.Item>
                  <motion.div variants={itemVariants}>
                    <Card
                      hoverable
                      cover={<img alt={cuisine.name} src={cuisine.imageUrl} className="h-48 object-cover" />}
                    >
                      <Card.Meta title={cuisine.name} />
                    </Card>
                  </motion.div>
                </List.Item>
              )}
            />
          </motion.div>
        </TabPane>
        <TabPane tab="Popular Dishes" key="3">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <List
              itemLayout="horizontal"
              dataSource={popularDishes}
              renderItem={(dish) => (
                <motion.div variants={itemVariants}>
                  <List.Item>
                    <List.Item.Meta
                      avatar={<img src={dish.imageUrl} alt={dish.name} className="w-16 h-16 object-cover rounded" />}
                      title={dish.name}
                      description={
                        <>
                          <p>{dish.description}</p>
                          <Tag color="blue">${dish.price.toFixed(2)}</Tag>
                        </>
                      }
                    />
                  </List.Item>
                </motion.div>
              )}
            />
          </motion.div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default HomePage;