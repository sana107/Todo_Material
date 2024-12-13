import { List } from "@mui/material";
import React from "react";
import ListItemDetail from "./ListItemDetail";
import { useSelector } from "react-redux";

const ListGroup = () => {

  const {alltodos} = useSelector((state) => state.todos);
  return (
    <List>
     {
      alltodos.map(todo => <ListItemDetail key={todo.id} todo ={todo}/>)
     }
    </List>
  );
};

export default ListGroup;
