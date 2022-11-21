import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  width: 100%;
  height: 200px;
  margin: 0 10px 10px 0;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EditButton = styled.button`
  padding: 10px;
  width: 62px;
  height: 50px;
  border-radius: 10px;
  text-align: center;
  background: none;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: none;
  cursor: pointer;
`;

export const Text = styled.p`
  resize: none;
  margin-top: 10px;
  max-width: 200px;
  font-size: 14px;
  border: none;
`;

export const EditText = styled.textarea`
  resize: none;
  margin-top: 10px;
  max-width: 200px;
  min-height: 100px;
  font-size: 14px;
  border: none;
`;
