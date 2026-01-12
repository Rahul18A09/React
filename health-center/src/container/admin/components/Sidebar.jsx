import { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Avatar,
  Tooltip,
  Switch,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const drawerWidth = 260;
const collapsedWidth = 76;

/* 🔐 ROLE BASED MENU */
const menuItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    path: "/admin",
    roles: ["admin", "doctor", "staff"],
  },
  {
    text: "Doctors",
    icon: <LocalHospitalIcon />,
    path: "/admin/doctors",
    roles: ["admin"],
  },
  {
    text: "Appointments",
    icon: <EventAvailableIcon />,
    path: "/admin/appointments",
    roles: ["admin", "doctor"],
  },
  {
    text: "Settings",
    icon: <SettingsIcon />,
    path: "/admin/settings",
    roles: ["admin"],
  },
];

const Sidebar = ({ darkMode, setDarkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(!isMobile);
  const [collapsed, setCollapsed] = useState(false);

  const userRole = "admin"; // 🔐 example role

  return (
    <>
      {/* 📱 Mobile Toggle */}
      {isMobile && (
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ position: "fixed", top: 16, left: 16, zIndex: 1300 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          width: collapsed ? collapsedWidth : drawerWidth,
          "& .MuiDrawer-paper": {
            width: collapsed ? collapsedWidth : drawerWidth,
            backgroundColor: darkMode ? "#121212" : "#f1f8f6",
            color: darkMode ? "#fff" : "#000",
            transition: "width 0.35s ease",
          },
        }}
      >
        {/* 🔰 HEADER */}
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: collapsed ? "center" : "space-between",
            px: 2,
          }}
        >
          {!collapsed && (
            <Typography fontWeight={700} fontSize={"1.5rem"} color="success.main">
              🏥 Health Center
            </Typography>
          )}

          <IconButton onClick={() => setCollapsed(!collapsed)}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>

        {/* 🌙 DARK MODE */}
        {/* {!collapsed && (
          <Box sx={{ px: 2, py: 1, display: "flex", alignItems: "center", gap: 1 }}>
            <DarkModeIcon fontSize="small" />
            <Typography fontSize="0.9rem">Dark Mode</Typography>
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          </Box>
        )} */}

        <Divider sx={{mb:1}}/>

        {/* 📜 MENU */}
        <List sx={{ px: 1}}>
          {menuItems
            .filter((item) => item.roles.includes(userRole))
            .map((item) => (
              <Tooltip
                key={item.text}
                title={collapsed ? item.text : ""}
                placement="right"
              >
                <motion.div whileHover={{ scale: 1.05 }}>
                  <ListItemButton
                    component={NavLink}
                    to={item.path}
                    onClick={isMobile ? () => setOpen(false) : undefined}
                    sx={{   
                      borderRadius: 2,
                      mb: 2,
                      justifyContent: collapsed ? "center" : "flex-start",
                      "&.active": {
                        backgroundColor: "success.main",
                        color: "#fff",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        fontSize:"1rem",
                        color: "inherit",
                        minWidth: collapsed ? "auto" : 40,
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>

                    {!collapsed && <ListItemText primary={item.text} />}
                  </ListItemButton>
                </motion.div>
              </Tooltip>
            ))}
        </List>

        {/* 👤 USER PROFILE */}
        <Box sx={{ mt: "auto", p: 2 , fontSize:"1rem"}}>
          <Divider sx={{ mb: 2 }} />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              justifyContent: collapsed ? "center" : "flex-start",
            }}
          >
            {/* <Avatar src="https://i.pravatar.cc/100" /> */}

            {!collapsed && (
              <Box>
                <Typography fontSize="1.2rem" color="green" fontWeight={700}>
                  Rahul Bharada
                </Typography>
                <Typography fontSize="1rem" color="text.secondary">
                  Admin
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
