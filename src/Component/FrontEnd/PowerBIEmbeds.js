// PowerBIEmbed.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PowerBIEmbed } from 'powerbi-client-react';

const PowerBIEmbeds = () => {
  const [embedToken, setEmbedToken] = useState('');
  const [embedUrl, setEmbedUrl] = useState('https://app.powerbi.com/groups/71488eaa-1122-43e1-9370-3a3148dd6128/reports/24e426e7-0d0e-465b-85cb-e7dcded17897/33644b731bee20050da9?experience=power-bi'
);
  const reportId = "24e426e7-0d0e-465b-85cb-e7dcded17897"
; // Replace with your actual report ID

  useEffect(() => {
    const fetchembedToken = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/get_embed_token');
        setEmbedToken(response.data.token);
        setEmbedUrl(response.data.embedUrl); // Assuming the API returns both token and URL
      } catch (error) {
        console.error('Error fetching embed token:', error);
      }
    };

    fetchembedToken();
  }, []);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      {embedToken && embedUrl && (
        <PowerBIEmbed
          embedConfig={{
            type: 'report',
            id: reportId,
            embedUrl: embedUrl,
            accessToken: embedToken,
            settings: {
              filterPaneEnabled: true,
              navContentPaneEnabled: true
            }
          }}
          cssClassName="powerbi-report"
        />
      )}
    </div>
  );
};

export default PowerBIEmbeds;
