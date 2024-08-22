import React from "react";

const Card = ({content, src, name, desc}) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-text">
        {content}
      </div>
      <div className="testimonial-avatar">
        <img src={src} />
      </div>
      <div className="testimonial-details">
        <h3 className="testimonial-name">{name}</h3>
        <p className="testimonial-desc">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
