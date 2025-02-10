import styled from "styled-components";
import tags from "./tags.json";

const TagContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
`;

const Tag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid ${(props) => (props.$ativo ? "#c98cf1" : "transparent")};
`;

const Tags = ({ aoSelecionarTag }) => {
  return (
    <TagContainer>
      <TagTitulo>Busque por tags:</TagTitulo>
      {tags.map((tag) => (
        <Tag
          key={tag.id}
          $ativo={tag.ativo}
          onClick={() => aoSelecionarTag(tag.tag)}
        >
          {tag.titulo}
        </Tag>
      ))}
    </TagContainer>
  );
};

export default Tags;
