import styled from "styled-components";
import ImagemCard from "./ImagemCard";

const ContainerImagens = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

const Imagens = ({ fotos, aoSelecionarFoto }) => {
    return (
        <ContainerImagens>
            {fotos.map(foto => <ImagemCard key={foto.id} foto={foto} aoSelecionarFoto={aoSelecionarFoto}/>)}
        </ContainerImagens>
    )
};

export default Imagens;