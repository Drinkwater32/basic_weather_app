import { tempDisplay } from "../utils/tempDisplay";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ResultsDisplay = ({ searchResults }) => {
  const currentTemp = searchResults
    ? tempDisplay(searchResults.main.temp)
    : null;
  const feelsLike = searchResults
    ? tempDisplay(searchResults.main.feels_like)
    : null;
  const high = searchResults ? tempDisplay(searchResults.main.temp_max) : null;
  const low = searchResults ? tempDisplay(searchResults.main.temp_min) : null;

  if (searchResults) {
    console.log(searchResults);
  }

  return (
    <div
      style={{
        width: "50%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {searchResults ? (
        <>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1533324268742-60b233802eef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                temps
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>Current Temp: {currentTemp}</p>
                <p>Feels like: {feelsLike}</p>
                <p>High Today: {high}</p>
                <p>Low Today: {low}</p>
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1569428034239-f9565e32e224?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cloud Coverage
              </Typography>
              <Typography variant="body2" color="text.secondary">
                temp
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1533985062386-ef0837f31bc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Wind
              </Typography>
              <Typography variant="body2" color="text.secondary">
                temp
              </Typography>
            </CardContent>
          </Card>
        </>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default ResultsDisplay;
