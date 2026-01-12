import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PeopleIcon from "@mui/icons-material/People";

const StatCard = ({ title, value, icon, bgColor }) => {
  return (
    <Card
      sx={{
        borderRadius: 4,
        height: "100%",
        transition: "all 0.3s ease",
        boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 14px 28px rgba(0,0,0,0.12)",
        },
      }}
    >
      <CardContent
        sx={{
          p: { xs: 2, sm: 3 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 2, sm: 3 },
          }}
        >
          {/* Icon */}
          <Box
            sx={{
              width: { xs: 44, sm: 56 },
              height: { xs: 44, sm: 56 },
              borderRadius: "50%",
              backgroundColor: bgColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {icon}
          </Box>

          {/* Text */}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.85rem" },
                fontWeight: 500,
                color: "text.secondary",
                letterSpacing: "0.4px",
                mb: 0.5,
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.4rem", sm: "2rem" },
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
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
      {/* Title */}
      <Typography
        sx={{
          fontSize: { xs: "1.6rem", sm: "2rem" },
          fontWeight: 700,
          mb: { xs: 2, sm: 4 },
        }}
      >
        Dashboard
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard
          sx={{"& .MuiListItemText-primary": {
                fontSize: "1.5rem",
                fontWeight: 500,
              },}}
            title="Total Doctors"
            value="12"
            bgColor="primary.light"
            icon={<LocalHospitalIcon fontSize="medium" color="primary" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <StatCard
          sx={{"& .MuiListItemText-primary": {
                fontSize: "1.5rem",
                fontWeight: 500,
              },}}
            title="Appointments"
            value="34"
            bgColor="success.light"
            icon={<EventAvailableIcon fontSize="medium" color="success" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <StatCard
          sx={{"& .MuiListItemText-primary": {
                fontSize: "1.5rem",
                fontWeight: 500,
              },}}
            title="Patients"
            value="89"
            bgColor="warning.light"
            icon={<PeopleIcon fontSize="medium" color="warning" />}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
