import { Layout, Menu, Typography } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { ConfigProvider } from "antd";

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemBg: "#001529",
            horizontalItemHoverBg: "#ffffff", // Hover
            horizontalItemSelectedBg: "#bae7ff", // Selecionado
            horizontalItemSelectedColor: "#000000", // Letras e barra 
          },
        },
      }}
    >
      <Header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#bae7ff",
        }}
      >
        <Title level={3} style={{ color: "white", margin: 0 }}>
          TimTimDrinks
        </Title>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={[
            { key: "1", icon: <HomeOutlined />, label: "Início" },
            { key: "2", icon: <AppstoreOutlined />, label: "Cardápio" },
            { key: "3", icon: <PhoneOutlined />, label: "Contato" },
          ]}
        />
      </Header>
    </ConfigProvider>
  );
};

export default AppHeader;
