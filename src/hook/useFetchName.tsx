import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

import { Data } from '../misc/type';

const useFetchName = (name: string) => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.openbrewerydb.org/v1/breweries?by_name=${name}`)
      .then((response: AxiosResponse) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error: AxiosError) => {
        setError(error.message);
        setLoading(false);
      });
  }, [name]);

  return { data, loading, error };
};

export default useFetchName;
