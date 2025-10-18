import React, { useState, useEffect } from 'react';
import CertificateForm from './components/CertificateForm';
import CertificateList from './components/CertificateList';
import { getAllCertificates } from './services/certificateService';
import './App.css';

function App() {
  const [certificates, setCertificates] = useState([]);
  const [editingCertificate, setEditingCertificate] = useState(null);

  const fetchCertificates = async () => {
    try {
      const data = await getAllCertificates();
      setCertificates(data);
    } catch (error) {
      console.error('Error fetching certificates:', error);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  return (
    <div className="App">
      <h1>Certificate Management</h1>
      <CertificateForm
        fetchCertificates={fetchCertificates}
        editingCertificate={editingCertificate}
        setEditingCertificate={setEditingCertificate}
      />
      <CertificateList
        certificates={certificates}
        fetchCertificates={fetchCertificates}
        setEditingCertificate={setEditingCertificate}
      />
    </div>
  );
}

export default App;