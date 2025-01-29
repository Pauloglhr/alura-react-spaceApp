import bannerImg from "./assets/banner.png";
import styled from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais";
import Cabecalho from "./components/Cabecalho";
import BarraLateral from "components/BarraLateral";
import Banner from "components/Banner";
import Galeria from "components/Galeria";

import fotos from './fotos.json';
import { useState } from "react";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  height: 100%;
`;

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 30px;  
`;

const App = () => {

  const [fotosGaleria, setFotosGaleria] = useState(fotos)
  
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ContentContainer>
            <Banner
              texto={"A galeria mais completa de fotos do espaço!"}
              backgroundImage={bannerImg}
            />
            <Galeria fotos={fotosGaleria}/>
          </ContentContainer>
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  );
}

export default App;
