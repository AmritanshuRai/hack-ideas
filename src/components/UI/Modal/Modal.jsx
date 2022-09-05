import { useEffect } from "react";
import ReactPortal from "../ReactPortal/ReactPortal";
import PrettyBorder from "../PrettyBorder/PrettyBorder";
import "./modalStyles.css";

function Modal({ children, isOpen, handleClose, className }) {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.pointerEvents = "none";
    } else {
      document.body.style.pointerEvents = "auto";
    }
    return () => {
      document.body.style.pointerEvents = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <PrettyBorder className="modal">
        <button onClick={handleClose} className="close-btn">
          Close
        </button>
        <div className={`modal-content ${className}`}>{children}</div>
      </PrettyBorder>
    </ReactPortal>
  );
}
export default Modal;
