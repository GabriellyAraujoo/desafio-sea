import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu, Avatar } from 'antd';
import {
  HomeOutlined,
  UserAddOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LockOutlined,
  SyncOutlined,
  UserOutlined
} from '@ant-design/icons';
import Home from './pages/Home';
import AddEmployee from './pages/AddEmployee';
import EmployeeList from './pages/EmployeeList';
import 'antd/dist/reset.css';
//import 'antd/dist/antd.css';

const { Header, Content, Sider } = Layout;

const App = () => {
  const [employees, setEmployees] = useState([
    { name: 'Daniel Alves da Silva', cpf: '000.000.000-99', status: 'Ativo', role: 'Cargo 1' },
    { name: 'Giselle Torres Lopes', cpf: '000.000.000-88', status: 'Inativo', role: 'Cargo 2' },
    { name: 'Ana Bispo dos Santos', cpf: '000.000.000-99', status: 'Inativo', role: 'Cargo 1' },
    { name: 'Regina Elisa Souza', cpf: '000.000.000-99', status: 'Ativo', role: 'Cargo 3' }
  ]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width={80} style={{ background: '#327fa8' }}>
          <Menu theme="dark" mode="vertical" defaultSelectedKeys={['1']} style={{ background: '#327fa8' }}>
            <Menu.Item key="1" icon={<AppstoreOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserAddOutlined />}>
              <Link to="/add-employee">Add Employee</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<SettingOutlined />}>
              <Link to="/settings">Settings</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<LockOutlined />}>
              <Link to="/security">Security</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<SyncOutlined />}>
              <Link to="/sync">Sync</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<UserOutlined />}>
              <Link to="/profile">Profile</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {Array.from({ length: 9 }, (_, index) => (
                <div key={index} style={{ margin: '0 8px', textAlign: 'center' }}>
                  <Avatar size={48} style={{ backgroundColor: '#327fa8', marginBottom: '4px' }}>{`Item ${index + 1}`}</Avatar>
                </div>
              ))}
            </div>
          </Header>
          <Content style={{ margin: '16px', display: 'flex', justifyContent: 'center', background: '#f0f2f5' }}>
            <Routes>
              <Route path="/" element={<EmployeeList employees={employees} />} />
              <Route path="/add-employee" element={<AddEmployee addEmployee={addEmployee} />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
