const BASE_URL = 'http://localhost:8081/api/certificates';

export const getAllCertificates = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const getCertificateById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}/get`);
  return response.json();
};

export const createCertificate = async (certificate) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(certificate),
  });
  return response.json();
};

export const updateCertificate = async (id, certificate) => {
  const response = await fetch(`${BASE_URL}/${id}/put`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(certificate),
  });
  return response.json();
};

export const deleteCertificate = async (id) => {
  await fetch(`${BASE_URL}/${id}/delete`, {
    method: 'DELETE',
  });
};