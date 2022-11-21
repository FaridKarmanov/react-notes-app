import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterParams, INote } from "../../types";

interface NoteState {
  notes: INote[];
  filterValue: string;
  isFilter: boolean;
}

const initialState: NoteState = {
  notes: [],
  filterValue: "",
  isFilter: false,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    editNode: (state, { payload }: PayloadAction<INote>) => {
      state.notes.forEach((note) => {
        if (note.id === payload.id) {
          note.value = payload.value;
        }
      });
    },
    addNote: (state, { payload }: PayloadAction<INote>) => {
      state.notes.push(payload);
    },
    removeNode: (state, { payload }: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => {
        return note.id !== payload;
      });
    },
    filterNodes: (state, { payload }: PayloadAction<FilterParams>) => {
      state.filterValue = payload.value;
      state.isFilter = payload.isFilter;
    },
  },
});

export const { addNote, removeNode, editNode, filterNodes } =
  notesSlice.actions;

export default notesSlice.reducer;
