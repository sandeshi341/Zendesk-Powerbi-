import axios from 'axios';

async function fetchDataWithRetry(url, token) {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Token expired or unauthorized, fetch a new token and retry
      const newToken = await fetchNewToken(); // Implement this function
      const retryResponse = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${newToken}`,
        },
      });
      return retryResponse.data;
    } else {
      throw error; // Handle other errors
    }
  }
}
