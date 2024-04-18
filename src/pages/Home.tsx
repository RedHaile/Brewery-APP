import { useCallback, useEffect, useState } from "react";
import { Alert, Box, Pagination } from "@mui/material";

import useFetch from "../hook/useFetch";
import useFetchName from "../hook/useFetchName";

import { Data } from "../misc/type";
import BreweryList from "../components/brewery/BreweryList";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import useFetchSort from "../hook/useFetchSort";
import BrewerySortType from "../components/brewery/BrewerySortType";
import ContactForm from "../components/form/ContactForm";

const url = "https://api.openbrewerydb.org/v1/breweries";
const boxStyles = {
  width: "100%",
  maxWidth: "500px",
  textAlign: "center",
  p: 2,
};
const Home = () => {
  const { loading: defaultLoading, error: defaultError } = useFetch<Data>(url);

  // Query
  const [searchQuery, setSearchQuery] = useState("");
  const { data, loading, error } = useFetchName(searchQuery);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };
  // Sort
  const [brewerySortType, setBrewerySortType] = useState("all");
  const { dataSort, loadingSort, errorSort } = useFetchSort({
    type: brewerySortType,
    page: currentPage,
  });

  // SortType Callback function
  const handleBrewerySortType = useCallback((type: string) => {
    setBrewerySortType(type);
    setCurrentPage(1);
  }, []);

  // Search queries Callback function
  const handleSearch = useCallback((query: any) => {
    setSearchQuery(query);
  }, []);

  // Empty query
  useEffect(() => {
    if (!searchQuery) {
      setSearchQuery("");
    }
  }, [searchQuery]);

  let breweriesToShow: Data[] = [];
  if (searchQuery && !loading && !error) {
    breweriesToShow = data;
  } else if (brewerySortType && !loadingSort && !errorSort) {
    breweriesToShow = dataSort;
  }

  return (
    <>
      <Header onSearch={handleSearch} />
      <BrewerySortType onSelectBrewerySortType={handleBrewerySortType} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          p: 2,
        }}
      >
        {loading || loadingSort || defaultLoading ? (
          <Box sx={boxStyles}>
            <Alert variant="outlined" severity="info">
              Loading...
            </Alert>
          </Box>
        ) : error || errorSort || defaultError ? (
          <Box sx={boxStyles}>
            <Alert variant="outlined" severity="error">
              Error fetching breweries: {error || errorSort || defaultError}
            </Alert>
          </Box>
        ) : (
          <>
            <BreweryList breweries={breweriesToShow} />
            <Box
              sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
            >
              <Pagination
                count={10}
                color="primary"
                page={currentPage}
                onChange={handlePageChange}
              />
            </Box>
            <ContactForm />
          </>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default Home;
