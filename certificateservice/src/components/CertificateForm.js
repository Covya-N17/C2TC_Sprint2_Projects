import React, { useState, useEffect } from 'react';
import { createCertificate, updateCertificate } from '../services/certificateService';
import { deleteCertificate } from '../services/certificateService';
import './CertificateForm.css';

const CertificateForm = ({ fetchCertificates, editingCertificate, setEditingCertificate }) => {
  const [certificate, setCertificate] = useState({
    year: '',
    reg_no: '',
    description: '',
    certificate_number: '',
    degree: '',
    year_of_passing: '',
  });

  useEffect(() => {
    if (editingCertificate) {
      setCertificate(editingCertificate);
    } else {
      setCertificate({
        year: '',
        reg_no: '',
        description: '',
        certificate_number: '',
        degree: '',
        year_of_passing: '',
      });
    }
  }, [editingCertificate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCertificate({ ...certificate, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingCertificate) {
        await updateCertificate(editingCertificate.id, certificate);
      } else {
        await createCertificate(certificate);
      }
      fetchCertificates();
      setEditingCertificate(null);
    } catch (error) {
      console.error('Error saving certificate:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>{editingCertificate ? 'Edit Certificate' : 'Add Certificate'}</h2>
      <form onSubmit={handleSubmit}>
        <input name="year" value={certificate.year} onChange={handleChange} placeholder="Year" required />
        <input name="reg_no" value={certificate.reg_no} onChange={handleChange} placeholder="Registration No" required />
        <input name="description" value={certificate.description} onChange={handleChange} placeholder="Description" required />
        <input name="certificate_number" value={certificate.certificate_number} onChange={handleChange} placeholder="Certificate Number" required />
        <input name="degree" value={certificate.degree} onChange={handleChange} placeholder="Degree" required />
        <input name="year_of_passing" value={certificate.year_of_passing} onChange={handleChange} placeholder="Year of Passing" required />
        <button type="submit">{editingCertificate ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default CertificateForm;