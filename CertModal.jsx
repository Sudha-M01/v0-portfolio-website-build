import { useEffect } from "react";

const CertModal = ({ cert, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!cert) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <span className="modal-badge">Verified Certificate</span>
        <h3>{cert.title}</h3>
        <p className="modal-issuer">{cert.issuer}</p>
        {cert.link ? (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-view-link"
          >
            View on Guvi ↗
          </a>
        ) : (
          <p className="modal-no-link">Issued by {cert.issuer} — no public verify link.</p>
        )}
      </div>
    </div>
  );
};

export default CertModal;
