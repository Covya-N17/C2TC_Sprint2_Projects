import React from "react";
import "./CertificateList.css";

function CertificateList({ certificates, onEdit, onDelete }) {
  return (
    <div className="certificate-list">
      <h2> Certificate Records</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Year</th>
            <th>Reg No</th>
            <th>Certificate No</th>
            <th>Degree</th>
            <th>Year of Passing</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {certificates.length > 0 ? (
            certificates.map((cert) => (
              <tr key={cert.id}>
                <td>{cert.id}</td>
                <td>{cert.year}</td>
                <td>{cert.reg_no}</td>
                <td>{cert.certificate_number}</td>
                <td>{cert.degree}</td>
                <td>{cert.year_of_passing}</td>
                <td>{cert.description}</td>
                <td>
                  <button className="edit-btn" onClick={() => onEdit(cert)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button className="delete-btn" onClick={() => onDelete(cert.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No certificates available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CertificateList;
