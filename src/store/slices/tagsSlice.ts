import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITag } from "../../types";

interface NoteState {
  tags: ITag[];
}

const initialState: NoteState = {
  tags: [],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTag: (state, { payload }: PayloadAction<ITag>) => {
      const result = state.tags.find((tag) => tag.value === payload.value);
      if (!result) {
        state.tags.push(payload);
      }
    },
    removeTag: (state, { payload }: PayloadAction<string>) => {
      state.tags = state.tags.filter((note) => {
        return note.id !== payload;
      });
    },
  },
});

export const { addTag, removeTag } = tagsSlice.actions;

export default tagsSlice.reducer;
