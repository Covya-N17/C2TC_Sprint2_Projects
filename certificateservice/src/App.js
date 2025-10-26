import React, { useState, useEffect } from "react";
import CertificateForm from "./components/CertificateForm";
import CertificateList from "./components/CertificateList";
import "./App.css";

function App() {
  const [certificates, setCertificates] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentCertificate, setCurrentCertificate] = useState(null);

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

  // Delete certificate
  const deleteCertificate = async (id) => {
    try {
      const response = await fetch(`/api/certificates/${id}/delete`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchCertificates();
      }
    } catch (error) {
      console.error("Error deleting certificate:", error);
    }
  };

  // Edit/Update certificate
  const editCertificate = (certificate) => {
    setIsUpdate(true);
    setCurrentCertificate(certificate);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to form
  };

  const updateCertificate = async (certificate) => {
    try {
      const response = await fetch(
        `/api/certificates/${certificate.id}/put`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(certificate),
        }
      );
      if (response.ok) {
        setIsUpdate(false);
        setCurrentCertificate(null);
        fetchCertificates();
      }
    } catch (error) {
      console.error("Error updating certificate:", error);
    }
  };

  return (
    <div className="App">
      <h1>🎓 Certificate Management System</h1>

      <CertificateForm
        onAdd={addCertificate}
        onUpdate={updateCertificate}
        isUpdate={isUpdate}
        currentCertificate={currentCertificate}
      />

      <CertificateList
        certificates={certificates}
        onEdit={editCertificate}
        onDelete={deleteCertificate}
      />
    </div>
  );
}

export default App;
