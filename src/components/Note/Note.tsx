import React, { useEffect, useState } from "react";
import { useDebounce, useInput } from "../../hooks";
import { useAppDispatch } from "../../store/hooks/hooks";
import { addTag, removeNode } from "../../store/slices";
import { editNode } from "../../store/slices/notesSlice";
import { v4 as uuids4 } from "uuid";
import {
  DeleteButton,
  ListItem,
  Text,
  EditText,
  EditButton,
  ButtonContainer,
} from "./styles";

interface IProps {
  text: string;
  id: string;
}

export const Note = ({ text, id }: IProps) => {
  const [state, setState] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { value, onChange } = useInput(text);
  const debounceValue = useDebounce(value, 1000);

  useEffect(() => {
    if (debounceValue.indexOf("#") >= 0) {
      const tag = debounceValue.slice(debounceValue.indexOf("#"));
      const index = tag.indexOf(" ");
      if (index === -1) {
        const tagValue = {
          value: tag.slice(0),
          id: uuids4(),
        };
        dispatch(addTag(tagValue));
      } else {
        const tagValue = {
          value: tag.slice(0, index),
          id: uuids4(),
        };
        dispatch(addTag(tagValue));
      }
    }
    dispatch(editNode({ id, value }));
  }, [debounceValue, id, dispatch, value]);

  return (
    <ListItem>
      <ButtonContainer>
        <EditButton
          onClick={() => {
            setState(!state);
          }}
        >
          {state ? "Watch" : "Edit"}
        </EditButton>
        <DeleteButton onClick={() => dispatch(removeNode(id))}>X</DeleteButton>
      </ButtonContainer>
      {state ? (
        <EditText onChange={onChange} defaultValue={text} />
      ) : (
        <Text>{text}</Text>
      )}
    </ListItem>
  );
};
