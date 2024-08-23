import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function HtmlFile() {
  const [htmlContent, setHtmlContent] = useState('');

  let fetchData = async () => {
    try {
      let resp = await axios.get('http://localhost:5002/Post_Profile_Report.html');
      setHtmlContent(resp.data); // Set the fetched HTML content to state
    } catch (error) {
      console.error('Error fetching HTML:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

