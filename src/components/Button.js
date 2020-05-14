import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const styledColor = css`
  /* 색상배정 함수 */
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }

      ${({ outline }) =>
        outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

const sizes = {
  large: {
    height: "3rem",
    fontSize: "2.5rem",
  },
  medium: {
    height: "2rem",
    fontSize: "1.5rem",
  },
  small: {
    height: "1rem",
    fontSize: "0.5rem",
  },
};

const sizeStyles = css`
  /* 크기 */
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyle = css`
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  
  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
   
  /* 크기 */
${sizeStyles}

/* 방법1 */
${styledColor}

/* 전체크기 */
${fullWidthStyle}

 /* 방법2 */

/* 
  ${({ theme, color }) => {
    const selected = theme.palette[color];

    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }

      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}; */

  /* 방법3 */

  /* background: ${({ theme, color }) => theme.palette[color]};

  &:hover {
    background: ${({ theme, color }) => lighten(0.1, theme.palette[color])};
  }

  &:active {
    background: ${({ theme, color }) => darken(0.1, theme.palette[color])};
  } */
`;

function Button({ children, color, size, outline, fullWidth, ...rest }) {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      children={children}
      {...rest}
    />
  );
}

Button.defaultProps = {
  color: "blue",
  size: "small",
};

export default Button;
