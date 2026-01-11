import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser, deleteUser } from "../redux/features/UserSlice";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const UserCrud = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    console.log(users);
    
  }, [users]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.age) return;

    if (editId === null) {
      dispatch(addUser({ id: Date.now(), ...formData }));
    } else {
      dispatch(updateUser({ id: editId, ...formData }));
      setEditId(null);
    }

    setFormData({ name: "", email: "", age: "" });
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (user) => {
    setEditId(user.id);
    setFormData({
      name: user.name,
      email: user.email,
      age: user.age,
    });
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 5 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          User CRUD
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <TextField
            label="Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />

          <Button variant="contained" onClick={handleSubmit}>
            {editId ? "Update User" : "Add user"}
          </Button>
        </Stack>
      </Paper>

      {/* Read */}

      <Paper sx={{ p: 2, mt: 3 }}>
        <Typography variant="h6">User List</Typography>

        {users.map((user) => (
          <Paper key={user.id} sx={{ p: 2, mt: 1 }}>
            <Typography>Name: {user.name}</Typography>
            <Typography>Email: {user.email}</Typography>
            <Typography>Age: {user.age}</Typography>

            <Stack direction="row" spacing={1} mt={1}>
              <Button
                variant="outlined"
                size="small"
                onClick={() => handleEdit(user)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                size="small"
                onClick={() => dispatch(handleDelete(user.id))}
              >
                Delete
              </Button>
            </Stack>
          </Paper>
        ))}
      </Paper>
    </Box>
  );
};

export default UserCrud;
