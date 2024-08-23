// src/authConfig.js
export const msalConfig = {
    auth: {
      clientId: '16eb7f2b-92b4-491e-a45e-89cd1b545874', // Replace with your Azure AD client ID
      authority: 'https://login.microsoftonline.com/c1ee7651-5a9e-4864-8c33-49d584820549', // Replace with your tenant ID
      redirectUri: 'http://localhost:4000', // Replace with your redirect URI
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: false,
    },
  };
  
  export const loginRequest = {
    scopes: ['User.Read'],
  };
  