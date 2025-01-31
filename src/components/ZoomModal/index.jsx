import BotaoIcon from "components/BotaoIcon";
import ImagemCard from "components/Galeria/Imagens/ImagemCard";
import styled from "styled-components";
import fechar from '../../../public/icones/fechar.png';

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const DialogEstilizado = styled.dialog`
position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`;

const ZoomModal = ({ foto }) => {
  return (
    <>
      {foto && <>
        <Overlay />
        <DialogEstilizado open={true}>
            <ImagemCard foto={foto} expandida={true} />
            <BotaoIcon>
                <img src={fechar} alt="" />
            </BotaoIcon>
        </DialogEstilizado>
      </>}
    </>
  );
};

export default ZoomModal;
