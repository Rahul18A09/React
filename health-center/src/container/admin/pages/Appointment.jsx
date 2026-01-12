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
  Chip,
  IconButton,
  Stack,
  Box,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

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

  const updateStatus = (id, status) => {
    setAppointments(
      appointments.map((appt) =>
        appt.id === id ? { ...appt, status } : appt
      )
    );
  };

  const handleDelete = (id) => {
    setAppointments(appointments.filter((appt) => appt.id !== id));
  };

  return (
    <>
      {/* Header */}
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
          Appointments
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpen(true)}
        >
          Add Appointment
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
              <TableCell sx={{ fontWeight: 600, fontSize:"1.5rem"}}>Patient</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize:"1.5rem"}}>Doctor</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize:"1.5rem"}}>Date</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize:"1.5rem"}}>Status</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize:"1.5rem"}} align="right">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {appointments.map((appt) => (
              <TableRow
                key={appt.id}
                sx={{
                  transition: "0.2s",
                  "&:hover": {
                    backgroundColor: "grey.50",
                  },
                }}
              >
                <TableCell sx={{fontSize:"1.2rem"}}>{appt.patient}</TableCell>
                <TableCell sx={{fontSize:"1.2rem"}}>{appt.doctor}</TableCell>
                <TableCell sx={{fontSize:"1.2rem"}}>{appt.date}</TableCell>

                <TableCell>
                  <Chip
                    label={appt.status}
                    color={statusColor[appt.status]}
                    size="big"
                    sx={{ fontWeight: 600, fontSize:"1.2rem" }}
                  />
                </TableCell>

                <TableCell align="right">
                  <Stack direction="row" spacing={1} justifyContent="flex-end">
                    {appt.status === "Pending" && (
                      <>
                        <IconButton
                          onClick={() =>
                            updateStatus(appt.id, "Approved")
                          }
                          sx={{
                            backgroundColor: "success.light",
                            "&:hover": {
                              backgroundColor: "success.main",
                              color: "#fff",
                            },
                          }}
                        >
                          <CheckIcon fontSize="big" />
                        </IconButton>

                        <IconButton
                          onClick={() =>
                            updateStatus(appt.id, "Cancelled")
                          }
                          sx={{
                            backgroundColor: "warning.light",
                            "&:hover": {
                              backgroundColor: "warning.main",
                              color: "#fff",
                            },
                          }}
                        >
                          <CloseIcon fontSize="big" />
                        </IconButton>
                      </>
                    )}

                    <IconButton
                      onClick={() => handleDelete(appt.id)}
                      sx={{
                        backgroundColor: "error.light",
                        "&:hover": {
                          backgroundColor: "error.main",
                          color: "#fff",
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
        <DialogTitle sx={{ fontWeight: 700 }}>
          Add Appointment
        </DialogTitle>

        <DialogContent sx={{ pt: 2 }}>
          <TextField
            label="Patient Name"
            fullWidth 
            margin="normal"
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
          />
          <TextField
            label="Doctor Name"
            fullWidth
            margin="normal"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          />
          <TextField
            type="date"
            fullWidth
            margin="normal"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
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
