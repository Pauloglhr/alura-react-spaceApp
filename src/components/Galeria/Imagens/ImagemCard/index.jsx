import styled from "styled-components";
import favoritar from '/icones/favorito.png';
import expandir from '/icones/expandir.png';


const FigureEstilizado = styled.figure`
    *{
        margin: 0px;
    }

    width: ${(props) => (props.$expandida ? '90%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }


    figcaption{
        background-color: #001634;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 12px;    
        color: white;
        border-radius: 0 0 20px 20px;
        gap:5px;
    }

    footer{
        display: flex;
        justify-content: space-between;
    }

    h3{
        font-family: 'GandhiSansBold';
    }

    h4 {
        font-size: 16px;
        font-weight: 100;
    }

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    button{
        background-color: transparent;
        border: none;
    }
`

const ImagemCard = ({ foto }) => {
    return (
        <FigureEstilizado>
            <img src={foto.path} alt="" />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <footer>
                    <h4>{foto.fonte}</h4>
                    <div>
                        <button>
                            <img src={favoritar} alt="" />
                        </button>
                        <button>
                            <img src={expandir} alt="" />
                        </button>
                    </div>
                </footer>
            </figcaption>
        </FigureEstilizado>
    )
};

export default ImagemCard;