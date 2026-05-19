import { useState } from "react";

function App() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = () => {
    alert(`Applied to ${company} for ${role}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Smart Job Tracker</h1>

      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Job Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Add Job
      </button>
    </div>
  );
}

export default App;