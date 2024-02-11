// Header.js
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome to Lee's Weather App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
