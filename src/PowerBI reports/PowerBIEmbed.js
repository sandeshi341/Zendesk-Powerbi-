



// src/PowerBIEmbed.js
import React from 'react';

const PowerBIEmbed = ({ accessToken }) => {
  const reportUrl = 'https://app.powerbi.com/groups/89a53315-f7ac-4882-bd34-072a887dd2bc/reports/f3acd1c0-6d59-4ba8-9df9-cccebb9ef6f5/33644b731bee20050da9?experience=power-bi'; // Replace with your report and group IDs

  return (
    <div className="PowerBIEmbed">
      <iframe
        title="Power BI Report"
        width="100%"
        height="600"
        src={`https://app.powerbi.com/groups/89a53315-f7ac-4882-bd34-072a887dd2bc/reports/f3acd1c0-6d59-4ba8-9df9-cccebb9ef6f5/33644b731bee20050da9?experience=power-bi&access_token=${accessToken}`}

        frameBorder="0"
        allowFullScreen={true}
      />
    </div>
  );
};

export default PowerBIEmbed;
