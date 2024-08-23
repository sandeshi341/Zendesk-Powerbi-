import React from 'react';
import './Powerbidashboard.css'

const PowerBIReport = () => {
  return (
    <div className="container">
      <iframe
        title="Quarterly Zendesk Report"
        width="1340"
        height="621.25"
        src="https://app.powerbi.com/reportEmbed?reportId=24e426e7-0d0e-465b-85cb-e7dcded17897&autoAuth=true&ctid=c1ee7651-5a9e-4864-8c33-49d584820549"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default PowerBIReport;


