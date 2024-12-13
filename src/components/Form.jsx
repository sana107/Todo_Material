import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, update } from "../Features/todosSlice";

const Form = () => {
  const { edit } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    edit.isEdit
      ? dispatch(update({ id: edit.todo.id, title, description }))
      : dispatch(add({ id: crypto.randomUUID(), title, description }));

    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    console.log("hello");
    setTitle(edit.todo.title);
    setDescription(edit.todo.description);
  }, [edit]);

  return (
    <form style={{ margin: "20px 0px" }} onSubmit={handleSubmit}>
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        variant="outlined"
        label="Enter Title"
        fullWidth
      />
      <TextField
        sx={{ margin: "10px 0px" }}
        variant="outlined"
        label="Enter Description"
        multiline
        rows={5}
        fullWidth
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <Button type="submit" variant="contained" color="success" fullWidth>
        Save
      </Button>
    </form>
  );
};

export default Form;
