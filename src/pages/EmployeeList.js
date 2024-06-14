import React, { useState, useEffect } from 'react';
import { Card, Button, List, Tag, Switch, Dropdown, Menu, notification } from 'antd';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { EllipsisOutlined } from '@ant-design/icons';
import '../styles/EmployeeList.css';  

const EmployeeList = ({ employees }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showActiveOnly, setShowActiveOnly] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get('active') === 'true') {
      setShowActiveOnly(true);
    }
  }, [location]);

  const handleMenuClick = (e, employee) => {
    if (e.key === '1') {
      navigate('/add-employee');
    } else if (e.key === '2') {
      notification.success({
        message: 'Usuário excluído com sucesso',
      });
    }
  };

  const menu = (employee) => (
    <Menu onClick={(e) => handleMenuClick(e, employee)}>
      <Menu.Item key="1">
        Alterar
      </Menu.Item>
      <Menu.Item key="2">
        Excluir
      </Menu.Item>
    </Menu>
  );

  const filteredEmployees = showActiveOnly
    ? employees.filter(employee => employee.status === 'Ativo')
    : employees;

  return (
    <div style={{ padding: '16px', display: 'flex', justifyContent: 'center' }}>
      <Card title="Funcionário(s)" headStyle={{ background: '#327fa8', color: '#fff' }} style={{ width: '100%', maxWidth: '800px' }}>
        <div className="header-actions">
          <Link to="/add-employee">
            <Button type="primary">+ Adicionar Funcionário</Button>
          </Link>
          <div className="filters">
            <Button onClick={() => setShowActiveOnly(!showActiveOnly)}>
              {showActiveOnly ? 'Ver todos' : 'Ver apenas ativos'}
            </Button>
            <Button onClick={() => setShowActiveOnly(false)}>Limpar filtros</Button>
          </div>
          <div>Ativos {employees.filter(employee => employee.status === 'Ativo').length}/{employees.length}</div>
        </div>
        <div className="employee-list-container">
          <List
            itemLayout="vertical"
            dataSource={filteredEmployees}
            renderItem={item => (
              <List.Item>
                <Card className={`employee-card ${item.status === 'Ativo' ? 'card-active' : 'card-inactive'}`}>
                  <Dropdown overlay={menu(item)} trigger={['click']}>
                    <EllipsisOutlined style={{ fontSize: '24px', cursor: 'pointer', float: 'right' }} />
                  </Dropdown>
                  <List.Item.Meta
                    title={<span className="employee-name">{item.name}</span>}
                    description={
                      <div className="employee-info">
                        <span className="employee-cpf">{item.cpf}</span>
                        <div className="employee-status">
                          <Tag className="status-tag">{item.status}</Tag>
                          <Tag className="role-tag">{item.role}</Tag>
                        </div>
                      </div>
                    }
                  />
                </Card>
              </List.Item>
            )}
          />
        </div>
        <div className="footer-actions">
          <div>A etapa está concluída?</div>
          <Switch defaultChecked={false} />
          <Button type="primary">Próximo passo</Button>
        </div>
      </Card>
    </div>
  );
};

export default EmployeeList;
