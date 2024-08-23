import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import HtmlFile from "../Component/allfiles/htmlfile";
import PowerBIReport from "../Component/allfiles/PowerBIReport";

export default function Landingpage() {
  const [view, setView] = useState(null);
  const location = useLocation();

  // Specify the path where you want the buttons to appear
  const isMainPage = location.pathname === "/";

  return (
    <div className="landing">
      {isMainPage && (
        <div>
          <button onClick={() => setView("html")}>File</button>&nbsp;&nbsp;&nbsp;
          <button onClick={() => setView("powerbi")}>PowerBI</button>
        </div>
      )}

      {view === "html" && <HtmlFile />}
      {view === "powerbi" && <PowerBIReport />}
    </div>
  );
}
