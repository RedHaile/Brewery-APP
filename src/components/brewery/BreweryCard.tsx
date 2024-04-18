import {
  CardContent,
  Typography,
  Chip,
  Button,
  Card,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";

import { BreweryCardProps } from "../../misc/type";

const BreweryCard = ({ brewery }: BreweryCardProps) => {
  return (
    <Card sx={{ width: "100%", height: "100%", bgcolor: "#50f1cb" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h6">{brewery.name}</Typography>
        <Chip
          sx={{ mb: 1 }}
          label={brewery.brewery_type}
          variant="outlined"
          color={brewery.brewery_type === "closed" ? "error" : "primary"}
        />

        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <PlaceIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2">{brewery.address_1}</Typography>
        </Box>

        <Link to={`/breweries/${brewery.id}`}>
          <Button variant="outlined">More Info</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default BreweryCard;
