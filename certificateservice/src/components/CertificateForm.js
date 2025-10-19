import React, { useState } from "react";
import "./CertificateForm.css";

function CertificateForm({ onAdd }) {
  const [formData, setFormData] = useState({
    year: "",
    reg_no: "",
    description: "",
    certificate_number: "",
    degree: "",
    year_of_passing: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      year: "",
      reg_no: "",
      description: "",
      certificate_number: "",
      degree: "",
      year_of_passing: "",
    });
  };

  return (
    <form className="certificate-form" onSubmit={handleSubmit}>
      <h2>Add New Certificate</h2>

      <div className="form-group">
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="reg_no"
          placeholder="Register Number"
          value={formData.reg_no}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="certificate_number"
          placeholder="Certificate Number"
          value={formData.certificate_number}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={formData.degree}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="year_of_passing"
          placeholder="Year of Passing"
          value={formData.year_of_passing}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button type="submit" className="submit-btn">Add Certificate</button>
    </form>
  );
}

export default CertificateForm;