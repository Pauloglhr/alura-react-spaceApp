import styled from "styled-components";
import ImagemCard from "./ImagemCard";

const ContainerImagens = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`

const Imagens = ({ fotos, aoSelecionarFoto, aoFavoritarFoto }) => {
    return (
        <ContainerImagens>
            {fotos.map(foto => 
                <ImagemCard 
                    key={foto.id} 
                    foto={foto} 
                    aoSelecionarFoto={aoSelecionarFoto}
                    aoFavoritarFoto={aoFavoritarFoto}
                />
                )
            }
        </ContainerImagens>
    )
};

export default Imagens;