import { Layout, Typography } from "antd";
import { PhoneOutlined } from "@ant-design/icons";

const { Footer } = Layout;
const { Paragraph } = Typography;

const AppFooter = () => {
  return (
    <Footer
      style={{ textAlign: "center", background: "#001529", color: "white" }}
    >
      <Paragraph style={{ color: "white" }}>
        <PhoneOutlined /> Contato: (XX) XXXX-XXXX | Todos os direitos
        reservados.
      </Paragraph>
    </Footer>
  );
};

export default AppFooter;
