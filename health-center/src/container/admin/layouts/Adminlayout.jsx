import React from 'react'
import { Box } from '@mui/material';
import Sidebar from '../components/Sidebar';


const Adminlayout = ({children}) => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}

export default Adminlayout;
