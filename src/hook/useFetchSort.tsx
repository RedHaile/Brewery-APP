import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

import { Data, SortFetchParams } from '../misc/type';

 const useFetchSort = ({ type, page }: SortFetchParams) => {
  const [dataSort, setDataSort] = useState<Data[]>([]);
  const [loadingSort, setLoadingSort] = useState(true); 
  const [errorSort, setErrorSort] = useState('');

  useEffect(() => {
    let apiUrl = `https://api.openbrewerydb.org/v1/breweries`;

    if (type && type !== 'all') {
      apiUrl += `?by_type=${type}&per_page=15`;
    }

    if (page && page !== 1) {
      apiUrl += `?per_page=15&page=${page}`;
    } else {
      apiUrl += `?per_page=15`; 
    }

    axios
      .get(apiUrl)
      .then((response: AxiosResponse) => {
        setDataSort(response.data);
        setLoadingSort(false);
      })
      .catch((error: AxiosError) => {
        setErrorSort(error.message);
        setLoadingSort(false);
      });
  }, [type, page]);

  return { dataSort, loadingSort, errorSort };
};


export default useFetchSort;      