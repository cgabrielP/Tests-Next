import Header from "../../components/Header";
import { GreyBackground, SubTitle, Title, TitleContainer } from "./styles";

const Home = () => {
  return (
    <GreyBackground>
      <TitleContainer>
        <Header/>
        <Title>This is the Home page</Title>
        <SubTitle>Some subtitle</SubTitle>
      </TitleContainer>
    </GreyBackground>
  );
};

export default Home;
