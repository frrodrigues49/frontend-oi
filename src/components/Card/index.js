import React from "react";
import { Link } from "react-router-dom";

function Card({ children, title, actionLink, textLink }) {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" style={{ borderBottom: "1px solid" }}>
            {title}
          </h5>
          <p className="card-text">{children}</p>
          <Link to={actionLink} className="card-link">
            {textLink}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
