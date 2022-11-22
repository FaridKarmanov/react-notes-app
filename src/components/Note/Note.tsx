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
  const debounceValue = useDebounce(value, 500);

  const getHashTags = (str: string) => {
    if (!str.includes("#")) {
    } else {
      const hashTagWord = str.split("").splice(str.indexOf("#")).join("");
      const index = hashTagWord.indexOf(" ");
      if (index === -1) {
        const tagValue = {
          value: hashTagWord,
          id: uuids4(),
        };
        dispatch(addTag(tagValue));
      } else if (index !== -1) {
        const newStr = hashTagWord
          .split("")
          .splice(index + 1)
          .join("");
        getHashTags(newStr);
      }
    }
  };

  useEffect(() => {
    getHashTags(debounceValue);
    dispatch(editNode({ id, value }));
  }, [debounceValue, id, dispatch, getHashTags, value]);

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
