import Tags from "./Tags";
import Populares from "./Populares";
import Titulo from "components/Titulo";
import styled from "styled-components";
import Imagens from "./Imagens";

const GaleriaContainer = styled.div`
  display: flex;
`

const SecaoFluida = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const Galeria = ({ fotos }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <Imagens fotos={fotos}/>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
