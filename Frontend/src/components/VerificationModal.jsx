import { useEffect } from 'react';
import './VerificationModal.css';

export default function VerificationModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`verify-overlay ${isOpen ? 'open' : ''}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      role="presentation"
    >
      <div className="verify-modal" role="dialog" aria-modal="true" aria-label="About this member">
        <button className="verify-close" onClick={onClose} type="button" aria-label="Close verification modal">
          &#10005;
        </button>

        <h2 className="verify-title">About this member</h2>

        <div className="verify-row">
          <strong>Account history</strong>
        </div>
        <div className="verify-row">
          <strong>Joined LinkedIn</strong>
          <span>September 2019</span>
        </div>
        <div className="verify-row">
          <strong>Contact info</strong>
          <span>Updated less than a month ago</span>
        </div>
        <div className="verify-row">
          <strong>Profile photo</strong>
          <span>Updated less than a month ago</span>
        </div>

        <div className="verify-section-head">
          Verifications
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2L4 5.5V11c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5.5L12 2z" fill="#1a1a1a" />
            <path d="M8.5 12l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="verify-item">
          <div className="verify-item-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="2" y="3" width="20" height="18" rx="3" stroke="#fff" strokeWidth="1.5" fill="none" />
              <path d="M2 8h20M8 3v5M16 3v5" stroke="#aaa" strokeWidth="1.2" />
              <path d="M6 13h4M6 16h8" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </div>
          <div className="verify-item-text">
            <strong>Yale University</strong>
            <span>Verified using university email in September 2024</span>
          </div>
        </div>

        <a href="#" className="verify-link">
          Learn more about verifications
        </a>

        <div className="verify-footer">
          <button className="verify-done" onClick={onClose} type="button">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
