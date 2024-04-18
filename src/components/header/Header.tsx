import React from 'react'
import { Box, Typography } from '@mui/material';
import { SearchFieldProps } from '../../misc/type';
import SearchField from './SearchField';


const Header = ({ onSearch }: SearchFieldProps) => { 
  return (
     
   <Box sx={{ display: "flex", alignItems: "center", gap: 4, p: 2 }}>
          <Typography variant="h4">Breweries App</Typography>
          <SearchField onSearch={onSearch} />
       </Box>      
    );
  };
export default Header;