// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  const colors = {
    primary: "#074EE8",
    secondary: "#07A4E8"
  };

  const backgroundColor = colors[props.color] || colors.primary;

  return (
    <button
      css={css`
        width: 171.19px;
        height: 50px;
        border-radius: 4px;
        padding-left: 16px;
        padding-right: 16px;
        gap: 8px;
        
        background-color: ${backgroundColor};
        border: none;
        cursor: pointer;
        opacity: 1;
        
          font-family: 'Sarabun', sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: white;

        display: flex;
        align-items: center;
        justify-content: center;
        
        &:hover {
          opacity: 0.9;
        }
      `}
    >
      {props.text}
    </button>
  );
}

export default Button;
