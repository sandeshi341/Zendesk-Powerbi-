export default function Powerbidashboard() {
    return (
      <div className="container">
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", maxWidth: "100%", background: "#f0f0f0" }}>
          <iframe 
            title="SPowerbiZendesk" 
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
            src="https://app.powerbi.com/groups/89a53315-f7ac-4882-bd34-072a887dd2bc/reports/f3acd1c0-6d59-4ba8-9df9-cccebb9ef6f5/33644b731bee20050da9?experience=power-bi" 
            frameBorder="0" 
            allowFullScreen="true">
          </iframe>
        </div>
      </div>
    );
  }
  