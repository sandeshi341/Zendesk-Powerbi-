
import { PowerBIEmbed } from 'powerbi-client-react';
import './App.css';

import Powerbidashboard from './PowerBI reports/PowerBIEmbed';
import HtmlFile from './Component/allfiles/htmlfile';
import PowerBIReport from './Component/allfiles/PowerBIReport';
import Landingpage from './A Main file/Landing page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Landingpage />} />,
{/* <PowerBIEmbed>Powerbi</PowerBIEmbed> 

   <Powerbidashboard>Zendesk Visuals</Powerbidashboard> */}
      </Routes>
      </Router>



    
  );
}

export default App;



