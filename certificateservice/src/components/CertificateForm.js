import React, { useState } from "react";
import "./CertificateForm.css";

function CertificateForm({ onAdd, onUpdate, isUpdate, currentData }) {
  const [formData, setFormData] = useState(
    currentData || {
      year: "",
      reg_no: "",
      certificate_number: "",
      degree: "",
      year_of_passing: "",
      description: "",
    }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      onUpdate(formData);
    } else {
      onAdd(formData);
    }
    setFormData({
      year: "",
      reg_no: "",
      certificate_number: "",
      degree: "",
      year_of_passing: "",
      description: "",
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

      <button type="submit" className="submit-btn">
        {isUpdate ? "Update Certificate" : "Add Certificate"}
      </button>
    </form>
  );
}

export default CertificateForm;
