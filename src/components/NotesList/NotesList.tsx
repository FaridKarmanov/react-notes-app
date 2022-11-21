import React from "react";
import { Note } from "..";
import { useAppSelector } from "../../store/hooks/hooks";
import { getNotes } from "../../store/selectors";
import { List } from "./styles";

export const NotesList = () => {
  const { notes, isFilter, filterValue } = useAppSelector(getNotes);

  return (
    <List>
      {isFilter
        ? notes
            .filter((elem) => elem.value.includes(filterValue))
            .map((elem) => {
              return <Note key={elem.id} text={elem.value} id={elem.id} />;
            })
        : notes.map((elem) => {
            return <Note key={elem.id} text={elem.value} id={elem.id} />;
          })}
    </List>
  );
};
