// import { PowerBIEmbed } from "powerbi-client-react";
import "./App.css";

import Powerbidashboard from "./PowerBI reports/PowerBIEmbed";

import PowerBIReport from "./Component/allfiles/PowerBIReport";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PowerBIReport />} />,
        {/* <PowerBIEmbed>Powerbi</PowerBIEmbed> 

   <Powerbidashboard>Zendesk Visuals</Powerbidashboard> */}
      </Routes>
    </Router>
  );
}

export default App;
