import { Link as RouterLink } from "react-router-dom";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import { Box, Breadcrumbs, Grid, Typography, Link } from "@mui/material"; 

import { BreweryDetailProps, Data,  } from "../../misc/type";
import useFetch from "../../hook/useFetch";
import Footer from "../footer/Footer";






const BreweryDetails = ({ id }:  BreweryDetailProps ) => { 
  const url = `https://api.openbrewerydb.org/v1/breweries/${id}`;
  const { data } = useFetch<Data>(url); 
  
 

  return (
    <>
    <Box sx={{ width: "75%", height: "75%", p: 2 }}>
      <Breadcrumbs separator={<KeyboardArrowLeft />} aria-label="breadcrumbs">
        <Link component={RouterLink} to="/" sx={{ textDecoration: "none", color: "neutral" }}>
          Home
        </Link>
</Breadcrumbs>
<Typography sx={{ mb: 2 }} variant="h4">
        {data?.name}
      </Typography>
      <Grid container spacing={2}>
        {data?.brewery_type && (
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Type:</Typography>
            <Typography variant="body2">{data?.brewery_type}</Typography>
          </Grid>
        )}
        {data?.address_1 && data?.address_2 && data?.address_3 && (
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Address:</Typography>
            <Typography variant="body1">
              {data?.address_1}
              {data?.address_2 && `, ${data?.address_2}`}
            </Typography>
          </Grid>
        )}
        {data?.phone && (
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Phone:</Typography>
            <Typography variant="body1">{data?.phone}</Typography>
          </Grid>
        )}
        {data?.website_url && (
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Website:</Typography>
            <Link underline="hover" href={data?.website_url} target="_blank">
              <Typography variant="body1">{data?.website_url}</Typography>
            </Link>
          </Grid>
        )}
        {data?.city && (
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">City:</Typography>
            <Typography variant="body1">{data?.city}</Typography>
          </Grid>
        )}
        {data?.state_province && (
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">State/Province:</Typography>
            <Typography variant="body1">{data?.state_province}</Typography>
          </Grid>
        )}
        {data?.postal_code && (
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Postal Code:</Typography>
            <Typography variant="body1">{data?.postal_code}</Typography>
          </Grid>
        )}
        </Grid>
</Box>
<Footer />
</>
  );
};
export default BreweryDetails;
