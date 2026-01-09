import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PeopleIcon from "@mui/icons-material/People";

const StatCard = ({ title, value, icon }) => {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {icon}
          <Box>
            <Typography color="text.secondary">{title}</Typography>
            <Typography variant="h5" fontWeight="bold">
              {value}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  return (
    <>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <StatCard
            title="Total Doctors"
            value="12"
            icon={<LocalHospitalIcon fontSize="large" color="primary" />}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <StatCard
            title="Appointments"
            value="34"
            icon={<EventAvailableIcon fontSize="large" color="success" />}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <StatCard
            title="Patients"
            value="89"
            icon={<PeopleIcon fontSize="large" color="warning" />}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
