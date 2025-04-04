import { Layout, Button, Typography, Row, Col, Card } from "antd";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const LandingPage = () => {
  return (
    <Layout>
      <AppHeader /> {/* Header separado */}
      <Content style={{ padding: "50px", textAlign: "center" }}>
        <Title>Orçamentos de Drinks para seu evento! 🍹</Title>
        <Paragraph>
          Escolha entre diversas opções de drinks e crie um orçamento sob
          medida.
        </Paragraph>
        <Button type="primary" size="large">
          Faça seu Orçamento
        </Button>

        <Row gutter={[16, 16]} style={{ marginTop: 50 }}>
          <Col span={12}>
            <Card title="Sobre nós">
              <Paragraph>
                Somos especialistas em drinks para eventos e festas, garantindo
                sabor e qualidade para sua celebração.
              </Paragraph>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Nosso Cardápio">
              <Paragraph>
                Escolha entre diversos tipos de drinks clássicos e autorais
                preparados pelos nossos bartenders.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </Content>
      <AppFooter /> {/* Footer separado */}
    </Layout>
  );
};

export default LandingPage;
