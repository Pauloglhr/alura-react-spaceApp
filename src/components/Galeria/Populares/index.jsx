import Botao from "components/Botao";
import Titulo from "components/Titulo";
import styled from "styled-components";

const PopularesContainer = styled.section`
  display: flex;
  gap: 24px;
  flex-direction: column;
  margin-left: 24px;

  h2 {
    margin-bottom: 0;
  }

  figcaption > img {
    width: 212px;
    height: 158px;
    border-radius: 20px;
  }
`

const Populares = () => {
  return(
    <PopularesContainer>
      <Titulo $alinhamento="center">Populares</Titulo>
        <figcaption>
          <img src="/images/populares/foto-1.png" alt="" />
        </figcaption>
        <figcaption>
          <img src="/images/populares/foto-2.png" alt="" />
        </figcaption>
        <figcaption>
          <img src="/images/populares/foto-3.png" alt="" />
        </figcaption>
        <figcaption>
          <img src="/images/populares/foto-4.png" alt="" />
        </figcaption>
        <figcaption>
          <img src="/images/populares/foto-5.png" alt="" />
        </figcaption>
        <Botao>Ver mais</Botao>
    </PopularesContainer>
  )
};

export default Populares;
