import React from "react";

const HealthCard = ({ icon, title, description, extraContent }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card shadow-sm h-100">
        <div className="card-body text-center">
          {/* Icon */}
          <div className="fs-1 mb-3">{icon}</div>

          {/* Title */}
          <h5 className="card-title fw-bold">{title}</h5>

          {/* Description */}
          <p className="card-text">{description}</p>

          {/* Extra Content (Optional) */}
          {extraContent && <div className="mt-3">{extraContent}</div>}
        </div>
      </div>
    </div>
  );
};

export default HealthCard;
