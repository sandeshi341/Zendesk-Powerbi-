import { useState, useEffect } from 'react';
import axios from 'axios';

function useAuthToken() {
  const [token, setToken] = useState(() => localStorage.getItem('authToken') || null);
  const [expiryTime, setExpiryTime] = useState(() => localStorage.getItem('tokenExpiry') || null);

  const fetchToken = async () => {
    try {
      const response = await axios.post('https://login.microsoftonline.com/{tenantId}/oauth2/v2.0/token', new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: '{clientId}',
        client_secret: '{clientSecret}',
        scope: 'https://analysis.windows.net/powerbi/api/.default'
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      const { access_token, expires_in } = response.data;
      const expiry = Date.now() + expires_in * 1000 - 300000; // 5 minutes buffer

      setToken(access_token);
      setExpiryTime(expiry);

      localStorage.setItem('authToken', access_token);
      localStorage.setItem('tokenExpiry', expiry);
    } catch (error) {
      console.error('Error fetching token', error);
      // Handle token fetch error (e.g., redirect to login)
    }
  };

  useEffect(() => {
    if (!token || Date.now() >= expiryTime) {
      fetchToken();
    }
  }, [token, expiryTime]);

  return token;
}

export default useAuthToken;
