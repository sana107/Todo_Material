import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    alltodos: [{ id: 1, title: "title", description: "description" }],
    edit: { todo: {}, isEdit: false },
  },
  reducers: {
    //remove
    remove: (state, action) => {
      return {
        ...state,
        alltodos: state.alltodos.filter((item) => item.id !== action.payload),
      };
    },

    //add

    add: (state, action) => {
      return {
        ...state,
        alltodos: [...state.alltodos, action.payload],
      };
    },

    //edit
    edit: (state, action) => {
      return {
        ...state,
        edit: { todo: action.payload, isEdit: true },
      };
    },

    //update
    update: (state, action) => {
      return {
        ...state,
        alltodos: state.alltodos.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        edit: { todo: {}, isEdit: false },
      };
    },
  },
});

export const { remove, add, edit, update } = todoSlice.actions;

export default todoSlice.reducer;
