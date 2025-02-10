import bannerImg from "./assets/banner.png";
import styled from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais";
import Cabecalho from "./components/Cabecalho";
import BarraLateral from "components/BarraLateral";
import Banner from "components/Banner";
import Galeria from "components/Galeria";

import fotos from "./fotos.json";
import { useEffect, useState } from "react";
import ZoomModal from "components/ZoomModal";

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
  const [fotosGaleria, setFotosGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [filtro, setFiltro] = useState('');
  const [filtroTag, setFiltroTag] = useState(0);

  useEffect(() =>{
    if(filtro === ''){
      setFotosGaleria(fotos)
    } else {
      const fotosFiltradas = fotos.filter(foto =>
        foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      )
      setFotosGaleria(fotosFiltradas);
    }
  }, [filtro])

  useEffect(() =>{
    if(filtroTag === 0){
      setFotosGaleria(fotos)
    } else {
      const fotosFiltradas = fotos.filter(foto =>
        foto.tagId === filtroTag
      )
      setFotosGaleria(fotosFiltradas)
    }
  }, [filtroTag])

  const aoFechar = () => {
    return setFotoSelecionada(null)
  }

  const aoFavoritarFoto = (foto) => {
    
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    
    setFotosGaleria(fotosGaleria.map(fotoDaGaleria =>{
      return({
        ...fotoDaGaleria,
        favorita: foto.id === fotoDaGaleria.id ? !foto.favorita : fotoDaGaleria.favorita
      })
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho aoDigitado={(prop) => setFiltro(prop)}/>
        <MainContainer>
          <BarraLateral />
          <ContentContainer>
            <Banner
              texto={"A galeria mais completa de fotos do espaço!"}
              backgroundImage={bannerImg}
            />
            <Galeria
              fotos={fotosGaleria}
              aoSelecionarFoto={(foto) => setFotoSelecionada(foto)}
              aoFavoritarFoto={aoFavoritarFoto}
              aoSelecionarTag={(tag) => setFiltroTag(tag)}
            />
          </ContentContainer>
        </MainContainer>
        <ZoomModal foto={fotoSelecionada} aoFechar={aoFechar} aoFavoritarFoto={aoFavoritarFoto}/>
      </AppContainer>
    </FundoGradiente>
  );
};

export default App;
