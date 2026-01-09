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
  DialogActions,
  TextField,
  MenuItem,
  Chip,
  IconButton,
  Stack,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const statusColor = {
  Pending: "warning",
  Approved: "success",
  Cancelled: "error",
};

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: "Amit Sharma",
      doctor: "Dr. Rahul",
      date: "2026-01-10",
      status: "Pending",
    },
    {
      id: 2,
      patient: "Neha Singh",
      doctor: "Dr. Amit",
      date: "2026-01-11",
      status: "Approved",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");

  // Add Appointment
  const handleAdd = () => {
    setAppointments([
      ...appointments,
      {
        id: Date.now(),
        patient,
        doctor,
        date,
        status: "Pending",
      },
    ]);
    setPatient("");
    setDoctor("");
    setDate("");
    setOpen(false);
  };

  // Update Status
  const updateStatus = (id, status) => {
    setAppointments(
      appointments.map((appt) =>
        appt.id === id ? { ...appt, status } : appt
      )
    );
  };

  // Delete Appointment
  const handleDelete = (id) => {
    setAppointments(appointments.filter((appt) => appt.id !== id));
  };

  return (
    <>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Appointments
      </Typography>

      <Button variant="contained" onClick={() => setOpen(true)} sx={{ mb: 2 }}>
        Add Appointment
      </Button>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Patient</TableCell>
              <TableCell>Doctor</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {appointments.map((appt) => (
              <TableRow key={appt.id}>
                <TableCell>{appt.patient}</TableCell>
                <TableCell>{appt.doctor}</TableCell>
                <TableCell>{appt.date}</TableCell>
                <TableCell>
                  <Chip
                    label={appt.status}
                    color={statusColor[appt.status]}
                  />
                </TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={1} justifyContent="flex-end">
                    {appt.status === "Pending" && (
                      <>
                        <IconButton
                          color="success"
                          onClick={() =>
                            updateStatus(appt.id, "Approved")
                          }
                        >
                          <CheckIcon />
                        </IconButton>
                        <IconButton
                          color="error"
                          onClick={() =>
                            updateStatus(appt.id, "Cancelled")
                          }
                        >
                          <CloseIcon />
                        </IconButton>
                      </>
                    )}
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(appt.id)}
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

      {/* Add Appointment Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add Appointment</DialogTitle>
        <DialogContent>
          <TextField
            label="Patient Name"
            fullWidth
            margin="dense"
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
          />
          <TextField
            label="Doctor Name"
            fullWidth
            margin="dense"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          />
          <TextField
            type="date"
            fullWidth
            margin="dense"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAdd}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Appointments;

