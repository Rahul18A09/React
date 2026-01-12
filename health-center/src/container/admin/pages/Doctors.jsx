import { useState } from "react";
import {
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  IconButton,
  Stack,
  Box,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const Doctors = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Rahul", specialty: "Cardiology" },
    { id: 2, name: "Dr. Amit", specialty: "Dermatology" },
  ]);

  const [open, setOpen] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState(null);
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");

  const handleAdd = () => {
    setEditingDoctor(null);
    setName("");
    setSpecialty("");
    setOpen(true);
  };

  const handleEdit = (doctor) => {
    setEditingDoctor(doctor);
    setName(doctor.name);
    setSpecialty(doctor.specialty);
    setOpen(true);
  };

  const handleSave = () => {
    if (editingDoctor) {
      setDoctors(
        doctors.map((doc) =>
          doc.id === editingDoctor.id ? { ...doc, name, specialty } : doc
        )
      );
    } else {
      setDoctors([...doctors, { id: Date.now(), name, specialty }]);
    }
    setOpen(false);
  };

  const handleDelete = (id) => {
    setDoctors(doctors.filter((doc) => doc.id !== id));
  };

  return (
    <>
      {/* Page Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "stretch", sm: "center" },
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.6rem", sm: "2rem" },
            fontWeight: 700,
          }}
        >
          Doctors
        </Typography>

        <Button variant="contained" sx={{fontSize:"1.2rem"}} startIcon={<AddIcon />} onClick={handleAdd}>
          Add Doctor
        </Button>
      </Box>

      {/* Table */}
      <Paper
        sx={{
          borderRadius: 4,
          overflowX: "auto",
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "grey.100" }}>
              <TableCell sx={{ fontWeight: 600 , fontSize: "1.5rem"}}>Name</TableCell>
              <TableCell sx={{ fontWeight: 600 , fontSize: "1.5rem"}}>Specialty</TableCell>
              <TableCell sx={{ fontWeight: 600 , fontSize: "1.5rem"}} align="right">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {doctors.map((doctor) => (
              <TableRow
                key={doctor.id}
                sx={{
                  fontSize: "1.3rem",
                  transition: "0.2s",
                  "&:hover": {
                    backgroundColor: "grey.50",
                  },
                }}
              >
                <TableCell sx={{fontSize:"1.2rem"}}>{doctor.name}</TableCell>
                <TableCell sx={{fontSize:"1.2rem"}}>{doctor.specialty}</TableCell>

                <TableCell align="right" sx={{fontSize:"1.2rem"}}>
                  <Stack direction="row" spacing={1} justifyContent="flex-end">
                    <IconButton
                      onClick={() => handleEdit(doctor)}
                      sx={{
                       
                        backgroundColor: "primary.light",
                        "&:hover": {
                          backgroundColor: "primary.main",
                          color: "#fff",
                           fontSize: "1.5rem",
                   
                        },
                      }}
                    >
                      <EditIcon fontSize="big" />
                    </IconButton>

                    <IconButton
                      onClick={() => handleDelete(doctor.id)}
                      sx={{
                        backgroundColor: "error.light",
                        "&:hover": {
                          backgroundColor: "error.main",
                          color: "#fff",
                        },
                        "& .MuiListItemText-primary": {
                          fontSize: "1.5rem",
                          fontWeight: 500,
                        },
                      }}
                    >
                      <DeleteIcon fontSize="big" />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle sx={{ fontWeight: 700,  fontSize: "1.5rem"}}>
          {editingDoctor ? "Edit Doctor" : "Add Doctor"}
        </DialogTitle>

        <DialogContent sx={{ pt: 2 }}>
          <TextField
            label="Doctor Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Specialty"
            fullWidth
            margin="normal"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          />
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Doctors;
