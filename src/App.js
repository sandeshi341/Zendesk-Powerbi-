
import { PowerBIEmbed } from 'powerbi-client-react';
import './App.css';

import Powerbidashboard from './PowerBI reports/PowerBIEmbed';
import HtmlFile from './Component/allfiles/htmlfile';
import PowerBIReport from './Component/allfiles/PowerBIReport';


function App() {
  return (
   <>
 {/* <HtmlFile>file</HtmlFile> */}
 <PowerBIReport>PowerBi report</PowerBIReport>
{/* <PowerBIEmbed>Powerbi</PowerBIEmbed>  */}

   {/* <Powerbidashboard>Zendesk Visuals</Powerbidashboard>  */}
    </>
  );
}

export default App;
