import { Col, Container, Row } from "react-bootstrap";
import { styled } from "styled-components";
import BlankPage from "../components/BlankPage";
import Title from "../components/Title";
import IconsComponent from "../components/IconsComponent";
import BulletPoint from "../components/BulletPoint";
import VerticalLine from "../components/VerticalLine";

const Home: React.FC = () => {
  return (
    <Container style={{ marginTop: "80px" }}>
      <Row>
        <Col md={3}></Col>
        <Col md={5}>
          <HomeWrapper>
            <BlankPage />
            <Title />
            <IconsComponent />
            <BulletPoint />
            <VerticalLine />
          </HomeWrapper>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
};

const HomeWrapper = styled.div`
  margin: 0 auto;
  height: 500px;
  border: 1px solid #f0f0f0;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

  .title {
    background-color: #fafafa;
    padding: 8px 5px;
  }
`;

export default Home;
