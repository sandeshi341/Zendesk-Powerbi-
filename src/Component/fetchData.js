import React, { useEffect } from 'react';
import axios from 'axios';
import useAuthToken from './useAuthToken';

function fetchData() {
  const token = useAuthToken();

  useEffect(() => {
    const getData = async () => {
      if (token) {
        try {
          const response = await axios.get('https://api.example.com/data', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          // Handle the response
        } catch (error) {
          console.error('Error fetching data', error);
          // Handle fetch error (e.g., show error message)
        }
      }
    };

    getData();
  }, [token]);

  return <div>Data loading...</div>;
}

export default fetchData;
