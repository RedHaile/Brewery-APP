import { Box, Grid } from "@mui/material"; 

import { BreweryListProps } from "../../misc/type";
import BreweryCard from "./BreweryCard";

const BreweryList = ({ breweries }: BreweryListProps ) => {
return (
  <Box>
    <Grid container spacing={4}> 
      {breweries.map((brewery) => (  
       <Grid item key={brewery.id} xs={8} sm={6} md={4} lg={3}>
         <BreweryCard brewery={brewery} />
       </Grid>
     ))}
    </Grid>
   </Box>
  );
};

export default BreweryList;
