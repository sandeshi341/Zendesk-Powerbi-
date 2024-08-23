import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig, loginRequest } from './authConfig';

// Initialize MSAL
const msalInstance = new PublicClientApplication(msalConfig);

// Function to get a new access token
let getNewAccessToken = async function () {
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length > 0) {
        try {
            const response = await msalInstance.acquireTokenSilent({
                ...loginRequest,
                account: accounts[0]
            });
            return response.accessToken;
        } catch (error) {
            console.error('Error acquiring token silently:', error);
            // Handle the token acquisition failure
        }
    }
    return null;
};

// Configuration for embedding the Power BI report
let config = {
    type: 'report',
    tokenType: window['powerbi-client'].models.TokenType.Aad,
    accessToken: await getNewAccessToken(),
    embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=YOUR_REPORT_ID&groupId=YOUR_GROUP_ID',
    eventHooks: {
        accessTokenProvider: getNewAccessToken
    }
};

// Get a reference to the embedded report HTML element
let embedContainer = document.getElementById('embedContainer');

// Embed the report and display it within the div container
powerbi.embed(embedContainer, config);
