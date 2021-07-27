import React, { useEffect } from "react";
import { animated, config, useSpring } from "react-spring";

export const Alert = ({ message, type, set }) => {
  const WarningIcon = (
    <svg
      className="w-6 h-6 alert_icon"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  );
  const SuccessIcon = (
    <svg
      className="w-6 h-6 alert_icon"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );

  const styles = useSpring({
    transform: type ? `translateY(0%)` : `translateY(-100%)`,
    config: { ...config.gentle, duration: 800 },
  });

  useEffect(() => {
    if (type) {
      setTimeout(() => {
        set(!type);
      }, 3000);
    }
  });

  return (
    <animated.div style={styles} className="alert_box_container">
      <div className={`alert_box ${{ type } ? "sucess" : "fail"}`}>
        <div>
          {true ? SuccessIcon : WarningIcon}
          <p className="alert_text">{message}</p>
        </div>
        <button style={{ marginLeft: "16px" }} onClick={() => set(false)}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.71995 3.72003C3.86057 3.57958 4.0512 3.50069 4.24995 3.50069C4.4487 3.50069 4.63932 3.57958 4.77995 3.72003L7.99995 6.94003L11.22 3.72003C11.2887 3.64634 11.3715 3.58724 11.4635 3.54625C11.5555 3.50526 11.6547 3.48322 11.7555 3.48144C11.8562 3.47966 11.9562 3.49819 12.0496 3.53591C12.143 3.57363 12.2277 3.62977 12.299 3.70099C12.3702 3.77221 12.4264 3.85705 12.4641 3.95043C12.5017 4.04382 12.5204 4.14385 12.5186 4.24455C12.5168 4.34526 12.4948 4.44457 12.4538 4.53657C12.4128 4.62857 12.3537 4.71137 12.28 4.78003L9.05995 8.00003L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5017 11.9562 12.4641 12.0496C12.4264 12.143 12.3702 12.2278 12.299 12.299C12.2277 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6547 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L7.99995 9.06003L4.77995 12.28C4.63777 12.4125 4.44972 12.4846 4.25542 12.4812C4.06112 12.4777 3.87574 12.399 3.73832 12.2616C3.60091 12.1242 3.5222 11.9388 3.51877 11.7445C3.51534 11.5502 3.58747 11.3622 3.71995 11.22L6.93995 8.00003L3.71995 4.78003C3.5795 4.63941 3.50061 4.44878 3.50061 4.25003C3.50061 4.05128 3.5795 3.86066 3.71995 3.72003Z"
              fill="#B08800"
            />
          </svg>
        </button>
      </div>
    </animated.div>
  );
};
