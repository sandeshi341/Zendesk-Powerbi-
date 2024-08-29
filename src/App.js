// import { PowerBIEmbed } from "powerbi-client-react";
import "./App.css";
import PowerBIEmbeds from "./Component/FrontEnd/PowerBIEmbeds";



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PowerBIEmbeds/>} />,
        {/* <PowerBIEmbed>Powerbi</PowerBIEmbed> 

   <Powerbidashboard>Zendesk Visuals</Powerbidashboard> */}
      </Routes>
    </Router>
  );
}

export default App;
