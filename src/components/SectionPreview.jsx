import React from 'react';
import { useNavigate } from 'react-router-dom';

const SectionPreview = ({ 
  title, 
  description, 
  items, 
  linkTo, 
  linkText, 
  icon,
  accentColor = "#3b82f6" 
}) => {
  const navigate = useNavigate();

  return (
    <section className="section-preview" style={{ "--accent-color": accentColor }}>
      <div className="preview-container">
        <div className="preview-header">
          <span className="preview-icon">{icon}</span>
          <div>
            <h2>{title}</h2>
            <p className="preview-description">{description}</p>
          </div>
        </div>

        <div className="preview-grid">
          {items.slice(0, 3).map((item, index) => (
            <div key={index} className="preview-item-card">
              {item.image && (
                <div className="preview-item-image">
                  <img src={item.image} alt={item.title} />
                </div>
              )}
              <div className="preview-item-content">
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                {item.tags && (
                  <div className="preview-tags">
                    {item.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="preview-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <button 
          className="btn btn-primary view-all-btn"
          onClick={() => navigate(linkTo)}
          style={{ background: accentColor }}
        >
          {linkText} →
        </button>
      </div>
    </section>
  );
};

export default SectionPreview;