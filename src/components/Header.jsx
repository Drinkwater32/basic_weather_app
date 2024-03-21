import { AppBar, Toolbar, Typography } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Welcome to Lee's Weather App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
