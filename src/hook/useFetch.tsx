import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from "axios";


export default function useFetch<T>(url: string) {
    //const [data, setData] = useState<T[]>([]);
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => { 
         axios 
             .get(url)
             .then((response: AxiosResponse) => { 
                setData(response.data); 
                setLoading(false);
            })
             .catch((error: AxiosError) => { 
                setError(error.message); 
                setLoading(false);
            });
}, [url]);

  return { data, loading, error };

};

export {};