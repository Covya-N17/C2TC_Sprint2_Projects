import React from 'react';
import { deleteCertificate } from '../services/certificateService';
import { createCertificate, updateCertificate } from '../services/certificateService';
import './CertificateList.css';

const CertificateList = ({ certificates, fetchCertificates, setEditingCertificate }) => {
  const handleDelete = async (id) => {
    try {
      await deleteCertificate(id);
      fetchCertificates();
    } catch (error) {
      console.error('Error deleting certificate:', error);
    }
  };

  return (
    <div className="list-container">
      <h2>Certificates</h2>
      {certificates.length === 0 ? (
        <p>No certificates found.</p>
      ) : (
        <div className="certificate-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <p><strong>Year:</strong> {cert.year}</p>
              <p><strong>Reg No:</strong> {cert.reg_no}</p>
              <p><strong>Description:</strong> {cert.description}</p>
              <p><strong>Certificate No:</strong> {cert.certificate_number}</p>
              <p><strong>Degree:</strong> {cert.degree}</p>
              <p><strong>Year of Passing:</strong> {cert.year_of_passing}</p>
              <button onClick={() => setEditingCertificate(cert)}>Edit</button>
              <button onClick={() => handleDelete(cert.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CertificateList;