import React from "react";
import { useAppDispatch } from "../../store/hooks/hooks";
import { filterNodes, removeTag } from "../../store/slices";
import {
  ButtonContainer,
  DeleteButton,
  FilterButton,
  TagItem,
  Text,
} from "./styles";

interface IProps {
  children: string;
  id: string;
}

export const Tag = ({ id, children }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <TagItem>
      <Text>{children}</Text>
      <ButtonContainer>
        {" "}
        <DeleteButton onClick={() => dispatch(removeTag(id))}>X</DeleteButton>
        <FilterButton
          onClick={() =>
            dispatch(filterNodes({ isFilter: true, value: children }))
          }
        >
          Filter note
        </FilterButton>
        <FilterButton
          onClick={() => dispatch(filterNodes({ isFilter: false, value: "" }))}
        >
          Not filter note
        </FilterButton>
      </ButtonContainer>
    </TagItem>
  );
};
