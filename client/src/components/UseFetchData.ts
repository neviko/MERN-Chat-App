import React, { useEffect, useState } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

// TypeScript interface for the API response data
interface ApiResponse<T> {
  data: T;
}

interface IProps {
  url: string;
}

// Define the custom hook for GET requests
export const UseFetchData: React.FC<IProps> = ({ url }): any => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const { data } = await axios.get<ApiResponse<any>>(url);
        setData(data);
      } catch (e) {
        if (axios.isAxiosError(e)) {
          setError(e.message);
        } else {
          console.error("error while fetching data", e);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, error };
};
