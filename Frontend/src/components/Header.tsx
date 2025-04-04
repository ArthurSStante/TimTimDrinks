import { Layout, Menu, Typography } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#001529",
      }}
    >
      <Title level={3} style={{ color: "white", margin: 0 }}>
        TimTimDrinks
      </Title>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Início
        </Menu.Item>
        <Menu.Item key="2" icon={<AppstoreOutlined />}>
          Cardápio
        </Menu.Item>
        <Menu.Item key="3" icon={<PhoneOutlined />}>
          Contato
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
