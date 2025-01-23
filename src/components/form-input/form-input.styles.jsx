import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStles = css`
  top: -22px;
  font-size: 16px;
  color: ${mainColor};
`

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }

  @media (max-width: 768px) {
    margin: 30px 0;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStles}
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 8px 8px 4px;
    margin: 20px 0;
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStles}
  }

  @media (max-width: 768px) {
    font-size: 14px;
    top: 8px;
    &.shrink {
      top: -12px;
      font-size: 10px;
    }
  }
`;
