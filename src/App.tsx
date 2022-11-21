import React from "react";
import { NotesForm, NotesList, TagList } from "./components";
import { Title, Wrapper } from "./ui";

export const App = () => {
  return (
    <Wrapper>
      <Title>Notes</Title>
      <NotesForm />
      <NotesList />
      <TagList />
    </Wrapper>
  );
};
