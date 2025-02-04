import { styled } from "styled-components";

const Botao = styled.button`
    width: 208px;
    border-radius: 10px;
    border: 2px solid #C98CF1;
    cursor: pointer;
    padding: 14px 29px;
    background: transparent;
    color: white;
    font-family: "Gandhi Sans";
    font-size: 20px;
    font-weight: 700;
    transition: background-color 0.2s ease-in-out;

    &:hover{
        background-color: #C98CF1;
    }
`

export default Botao;