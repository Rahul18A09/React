import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SettingsIcon from "@mui/icons-material/Settings";

import { NavLink } from "react-router-dom";

const drawerWidth = 260;

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/admin" },
  { text: "Doctors", icon: <LocalHospitalIcon />, path: "/admin/doctors" },
  { text: "Appointments", icon: <EventAvailableIcon />, path: "/admin/appointments" },
  { text: "Settings", icon: <SettingsIcon />, path: "/admin/settings" },
];

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#f1f8f6", // light medical background
          borderRight: "1px solid #e0e0e0",
        },
      }}
    >
      <Toolbar />

      {/* Logo / Title */}
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        color="#2e7d32"
        mb={2}
      >
        🏥 Health Center
      </Typography>

      <List sx={{ px: 1 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={NavLink}
            to={item.path}
            sx={{
              borderRadius: 2,
              mb: 1,
              px: 2,

              "& .MuiListItemIcon-root": {
                color: "#388e3c",
                minWidth: 40,
              },

              "& .MuiListItemText-primary": {
                fontSize: "1.5rem",
                fontWeight: 500,
              },

              "&:hover": {
                backgroundColor: "#dcedc8",
              },

              "&.active": {
                backgroundColor: "#388e3c",
                color: "#fff",

                "& .MuiListItemIcon-root": {
                  color: "#fff",
                },

                "& .MuiListItemText-primary": {
                  fontWeight: 600,
                },
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
