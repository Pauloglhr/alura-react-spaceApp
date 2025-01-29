import styled from "styled-components";
import ImagemCard from "./ImagemCard";

const ContainerImagens = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

const Imagens = ({ fotos }) => {
    return (
        <ContainerImagens>
            {fotos.map(foto => <ImagemCard key={foto.id} foto={foto}/>)}
        </ContainerImagens>
    )
};

export default Imagens;