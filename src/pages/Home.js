import React from 'react';
import { Card, Typography, Avatar } from 'antd';

const { Text } = Typography;

const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '16px', width: '100%' }}>
      <Card style={{ width: '30%', margin: '16px' }}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit suscipit porttitor. Suspendisse ex lorem, rhoncus nec ante eu, venenatis aliquam turpis...</Text>
        <Avatar shape="square" size={64} icon={<img src="path/to/profile.png" alt="Profile" />} />
      </Card>
      <Card style={{ width: '65%', margin: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {Array.from({ length: 9 }, (_, index) => (
            <div key={index} style={{ margin: '0 8px', textAlign: 'center' }}>
              <Avatar size={48} style={{ backgroundColor: '#327fa8', marginBottom: '4px' }}>{`Item ${index + 1}`}</Avatar>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Home;
