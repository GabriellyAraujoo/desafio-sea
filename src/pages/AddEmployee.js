import React, { useState } from 'react';
import { Form, Input, Select, Radio, Button, Switch, Divider, Typography, Checkbox, Card, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../styles/AddEmployee.css';  // Import the CSS file for styles

const { Title } = Typography;
const { Option } = Select;

const AddEmployee = ({ addEmployee }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [active, setActive] = useState(true);

  const handleSave = () => {
    form.validateFields().then(values => {
      const newEmployee = {
        name: values.name,
        cpf: values.cpf,
        status: active ? 'Ativo' : 'Inativo',
        role: values.role,
      };

      // Adicionar o novo funcionário à lista
      addEmployee(newEmployee);

      // Exibir notificação de sucesso
      notification.success({
        message: 'Funcionário salvo com sucesso',
      });

      // Redirecionar para a lista de funcionários ativos
      navigate('/?active=true');
    });
  };

  return (
    <Card title={<Title level={4} style={{ color: '#fff' }}>Adicionar Funcionário</Title>} headStyle={{ background: '#327fa8' }} style={{ margin: '16px', maxWidth: '800px', width: '100%' }}>
      <Form form={form} layout="vertical">
        <Form.Item label="O trabalhador está ativo ou inativo?" valuePropName="checked">
          <Switch defaultChecked onChange={setActive} />
        </Form.Item>
        <Form.Item label="Nome" name="name" rules={[{ required: true, message: 'Por favor, insira o nome' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Sexo" name="sexo" rules={[{ required: true, message: 'Por favor, selecione o sexo' }]}>
          <Radio.Group>
            <Radio value="feminino">Feminino</Radio>
            <Radio value="masculino">Masculino</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="CPF" name="cpf" rules={[{ required: true, message: 'Por favor, insira o CPF' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Data de Nascimento" name="birthdate" rules={[{ required: true, message: 'Por favor, insira a data de nascimento' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="RG" name="rg" rules={[{ required: true, message: 'Por favor, insira o RG' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Cargo" name="role" rules={[{ required: true, message: 'Por favor, selecione o cargo' }]}>
          <Select>
            <Option value="cargo1">Cargo 1</Option>
            <Option value="cargo2">Cargo 2</Option>
          </Select>
        </Form.Item>
        <Divider />
        <Form.Item label="Quais EPIs o trabalhador usa na atividade?" name="epi">
          <Checkbox>O trabalhador não usa EPI</Checkbox>
        </Form.Item>
        <Form.Item label="Selecione a atividade" name="activity">
          <Select>
            <Option value="atividade1">Atividade 1</Option>
            <Option value="atividade2">Atividade 2</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Selecione o EPI" name="epiSelect">
          <Select>
            <Option value="calçado">Calçado de segurança</Option>
            <Option value="luvas">Luvas</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Informe o número do CA" name="ca">
          <Input />
        </Form.Item>
        <Button type="dashed" style={{ marginBottom: '8px' }}>Adicionar EPI</Button>
        <Button type="dashed" style={{ marginBottom: '16px' }}>Adicionar outra atividade</Button>
        <Divider />
        <Form.Item label="Adicione Atestado de Saúde (opcional)" name="healthCertificate">
          <Input />
        </Form.Item>
        <Button type="primary" onClick={handleSave}>Salvar</Button>
      </Form>
    </Card>
  );
};

export default AddEmployee;
