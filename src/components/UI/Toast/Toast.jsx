import { useEffect } from "react";
import ReactPortal from "../ReactPortal/ReactPortal";
import PrettyBorder from "../PrettyBorder/PrettyBorder";

import "./toast.css";

function Toast({ className, setToastConfig, toastConfig }) {
  useEffect(() => {
    const timer = setInterval(() => {
      setToastConfig({ show: false });
    }, 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {toastConfig.show && (
        <ReactPortal wrapperId="react-portal-toast-container">
          <PrettyBorder className={`toast`} type={toastConfig.type}>
            <div className={`toast-content ${className}`}>
              {toastConfig.message}
            </div>
          </PrettyBorder>
        </ReactPortal>
      )}
    </>
  );
}
export default Toast;
