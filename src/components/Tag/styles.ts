import styled from "styled-components";

export const TagItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 200px;
  width: 100%;
  padding: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeleteButton = styled.button`
  width: 60px;
  height: 60px;
  background: none;
  cursor: pointer;
`;

export const FilterButton = styled.button`
  width: 60px;
  height: 60px;
  background: none;
  cursor: pointer;
`;

export const Text = styled.p`
  resize: none;
  width: 100%;
  font-size: 20px;
  border: none;
  color: #000;
`;
