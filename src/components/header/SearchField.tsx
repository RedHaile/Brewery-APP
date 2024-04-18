import React, { useState, useEffect } from 'react';
import { Box, TextField, InputAdornment, IconButton, List, ListItem, ListItemText, Alert } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Data, SearchFieldProps } from "../../misc/type";
import useFetchName from "../../hook/useFetchName";

const SearchField = ({ onSearch }: SearchFieldProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Data[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { data: suggestionsData, loading, error } = useFetchName(searchQuery);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    setShowSuggestions(query.length > 0);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
    setSearchQuery("");
    setShowSuggestions(false);
  };

  useEffect(() => {
    if (!loading && !error) {
      const filteredSuggestions = suggestionsData.filter(brewery =>
        brewery.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  }, [suggestionsData, loading, error, searchQuery]);

  const handleClickSuggestion = (brewery: Data) => {
    setSearchQuery(brewery.name);
    onSearch(brewery.name);
    setShowSuggestions(false);
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 300);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        maxWidth: "250px",
        position: "relative",
      }}
    >
      <TextField
        label="Search by Name"
        variant="outlined"
        value={searchQuery}
        onChange={handleInputChange}
        onBlur={handleBlur}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {showSuggestions && suggestions.length > 0 && (
        <List
          sx={{
            maxHeight: "calc(50vh - 30px)",
            overflowY: "auto",
            background: "white",
            border: "1px solid #FF4032",
            padding: 1,
            position: "absolute",
            zIndex: 1,
            top: "5rem",
          }}
        >
          {suggestions.map(brewery => (
            <ListItem
              key={brewery.id}
              sx={{
                cursor: "pointer",
                backgroundColor: brewery.name === searchQuery ? "#FF4032" : "white",
              }}
              onClick={() => handleClickSuggestion(brewery)}
            >
              <ListItemText primary={brewery.name} />
            </ListItem>
          ))}
          {loading && (
            <Alert variant="outlined" severity="info">
              Loading suggestions...
            </Alert>
          )}
          {error && (
            <Alert variant="outlined" severity="error">
              Error fetching suggestions: {error}
            </Alert>
          )}
        </List>
      )}
    </Box>
  );
};

export default SearchField;
