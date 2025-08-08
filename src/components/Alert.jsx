// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FrownIcon from "../assets/frown.svg";
import AlertCircleIcon from "../assets/alert-triangle.svg";
import AlertTriangleIcon from "../assets/alert-circle.svg";
import CheckCircleIcon from "../assets/check-circle.svg";

function Alert(props) {
  const types = {
    error: {
        color: "#F9C8C8",
        icon: FrownIcon,
        iconColor: "#ED5050",
        text: "This is error alert box"
    },
    warning: {
        color: "#F9D9C8",
        icon: AlertTriangleIcon,
        iconColor: "#EA712D",
        text: "This is warning alert box"
    },
    info: {
        color: "#F9EBC8",
        icon: AlertCircleIcon,
        iconColor: "#F29811",
        text: "This is info alert box"
    }, 
    success: {
        color: "#CEF7CD",
        icon: CheckCircleIcon,
        iconColor: "#14944F",
        text: "This is success alert box"
    }
  };

  const alertType = types[props.type] || types.error;

  return (
    <section
      css={css`
        width: 650px;
        height: 76px;
        border-radius: 10px;
        padding-left: 16px;
        padding-right: 16px;
        gap: 8px;

        background-color: ${alertType.color};
        opacity: 1;

        display: flex;
        align-items: center;
        justify-content: start;
        position: relative;
        top: 0;
        left: 0;

        font-family: 'Kanit', sans-serif;
        font-weight: 700;
        font-style: bold;
        font-size: 20px;
        line-height: 100%;
        letter-spacing: 0px;
        color: #444444;
        opacity: 1;
      `}
      aria-label={`${alertType.text} alert`}
    >
      <img src={alertType.icon} alt={`${alertType.text} icon`} css={css`
        width: 32px;
        height: 32px;
        color: ${alertType.iconColor};
        opacity: 1;
      `}    />
      <span>{alertType.text}</span>
    </section>
  );
}

export default Alert;
