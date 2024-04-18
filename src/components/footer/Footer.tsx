import { Box, Link, Typography } from '@mui/material';


const Footer = () => {
  return (
     //<Box sx={{ display: "flex", padding: 2, color: "white", }}>
     <Box
     component="footer"
     sx={{
       backgroundColor: '#f0f0f0',
       padding: '20px',
       textAlign: 'center',
       marginTop: 'auto', 
     }}
     >
       <Link href="https://www.openbrewerydb.org/" underline="none">
         All rights reserved by Open Brewery DB api
          </Link>

          <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Autor: Haile Redeat
      </Typography>
      </Box>
   );     
};
export default Footer;