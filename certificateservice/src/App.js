import React, { useState, useEffect } from "react";
import CertificateForm from "./components/CertificateForm";
import CertificateList from "./components/CertificateList";
import "./App.css";

function App() {
  const [certificates, setCertificates] = useState([]);

  // Fetch all certificates
  const fetchCertificates = async () => {
    try {
      const response = await fetch("/api/certificates");
      const data = await response.json();
      setCertificates(data);
    } catch (error) {
      console.error("Error fetching certificates:", error);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  // Add new certificate
  const addCertificate = async (certificate) => {
    try {
      const response = await fetch("/api/certificates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(certificate),
      });
      if (response.ok) {
        fetchCertificates();
      }
    } catch (error) {
      console.error("Error adding certificate:", error);
    }
  };

  return (
    <div className="app-container">
      <h1>🎓 Certificate Management System</h1>
      <CertificateForm onAdd={addCertificate} />
      <CertificateList certificates={certificates} />
    </div>
  );
}

export default App;