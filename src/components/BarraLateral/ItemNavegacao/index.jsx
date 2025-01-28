import styled from "styled-components";

const ItemListaEstilizado = styled.li`
    display: flex;
    line-height: 29px;
    align-items: center;
    gap: 22px;
    margin-bottom: 30px;
    font-size: 24px;
    cursor: pointer;
    color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9' };
    font-family: ${ props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular' };
`

const ItemNavegacao = ({ children ,ativo=false, iconeAtivo, iconeInativo }) => {
    return(
        <ItemListaEstilizado $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="Ícone" />
            {children}
        </ItemListaEstilizado>
    )
}

export default ItemNavegacao;