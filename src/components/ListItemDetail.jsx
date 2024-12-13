import { Box, Button, Divider, ListItem, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { edit, remove } from "../Features/todosSlice";

const ListItemDetail = ({ todo }) => {
  const dispatch = useDispatch();

  const handleremove = (id) => {
    dispatch(remove(id));
  };

  const handleEdit = (todo) => {
    // e.preventDefault();
    dispatch(edit(todo));
  };
  return (
    <>
      <ListItem>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">{todo.title} </Typography>
          <Typography variant="body1">{todo.description} </Typography>
        </Box>
        <Box>
          <Button
            sx={{ margin: "0px 10px" }}
            variant="outlined"
            color="warning"
            size="small"
            endIcon={<EditIcon />}
            onClick={() => handleEdit(todo)}
          >
            Edit
          </Button>
          <Button
            endIcon={<DeleteIcon />}
            variant="outlined"
            color="error"
            size="small"
            onClick={() => handleremove(todo.id)}
          >
            Delete
          </Button>
        </Box>
      </ListItem>
      <Divider />
    </>
  );
};

export default ListItemDetail;
