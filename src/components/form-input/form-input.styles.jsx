import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStles = css`
  top: -1.3rem;
  font-size: 1rem;
  color: ${mainColor};
`

export const GroupContainer = styled.div`
  position: relative;
  margin: 2.8rem 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }

  @media (max-width: 48rem) {
    margin: 1.8rem 0;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 1.1rem;
  padding: 0.6rem 0.6rem 0.6rem 0.3rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 1.5rem 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStles}
  }

  @media (max-width: 48rem) {
    font-size: 1rem;
    padding: 0.5rem 0.5rem 0.5rem 0.2rem;
    margin: 1.2rem 0;
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.3rem;
  top: 0.6rem;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStles}
  }

  @media (max-width: 48rem) {
    font-size: 0.8rem;
    top: 0.5rem;
    &.shrink {
      top: -12px;
      font-size: 0.6rem;
    }
  }
`;
