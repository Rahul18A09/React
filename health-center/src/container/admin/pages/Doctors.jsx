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
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Doctors = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Rahul", specialty: "Cardiology" },
    { id: 2, name: "Dr. Amit", specialty: "Dermatology" },
  ]);

  const [open, setOpen] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState(null);
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");

  // Open Add Dialog
  const handleAdd = () => {
    setEditingDoctor(null);
    setName("");
    setSpecialty("");
    setOpen(true);
  };

  // Open Edit Dialog
  const handleEdit = (doctor) => {
    setEditingDoctor(doctor);
    setName(doctor.name);
    setSpecialty(doctor.specialty);
    setOpen(true);
  };

  // Save Doctor (Add or Update)
  const handleSave = () => {
    if (editingDoctor) {
      // UPDATE
      setDoctors(
        doctors.map((doc) =>
          doc.id === editingDoctor.id
            ? { ...doc, name, specialty }
            : doc
        )
      );
    } else {
      // CREATE
      setDoctors([
        ...doctors,
        { id: Date.now(), name, specialty },
      ]);
    }
    setOpen(false);
  };

  // Delete Doctor
  const handleDelete = (id) => {
    setDoctors(doctors.filter((doc) => doc.id !== id));
  };

  return (
    <>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Doctors
      </Typography>

      <Button variant="contained" onClick={handleAdd} sx={{ mb: 2 }}>
        Add Doctor
      </Button>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Specialty</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {doctors.map((doctor) => (
              <TableRow key={doctor.id}>
                <TableCell>{doctor.name}</TableCell>
                <TableCell>{doctor.specialty}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={1} justifyContent="flex-end">
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(doctor)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(doctor.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Add/Edit Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          {editingDoctor ? "Edit Doctor" : "Add Doctor"}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Doctor Name"
            fullWidth
            margin="dense"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Specialty"
            fullWidth
            margin="dense"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
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

