import React, { useEffect, useState } from 'react';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider, useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import { msalConfig, loginRequest } from './authConfig';
import PowerBIEmbed from './PowerBIEmbed'; // Component to embed Power BI report

const msalInstance = new PublicClientApplication(msalConfig);

function Tokens() {
  const [accessToken, setAccessToken] = useState(null);
  const { instance, accounts } = useMsal();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        if (accounts.length > 0) {
          const response = await instance.acquireTokenSilent({
            ...loginRequest,
            account: accounts[0]
          });
          setAccessToken(response.accessToken);
        }
      } catch (error) {
        console.error('Token acquisition failed:', error);
        // Handle token acquisition failure
      }
    };

    fetchToken();
  }, [instance, accounts]);

  return (
    <>
      <AuthenticatedTemplate>
        {accessToken ? (
          <PowerBIEmbed accessToken={accessToken} />
        ) : (
          <p>Loading...</p>
        )}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>Please sign in to access the Power BI report.</p>
      </UnauthenticatedTemplate>
    </>
  );
}



export default Tokens;
