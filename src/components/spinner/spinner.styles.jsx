import styled from "styled-components";

export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 48rem) {
    height: 50vh; 
  }

  @media (max-width: 30rem) {
    height: 40vh; 
  }
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 3.1rem;
  height: 3.1rem;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @media (max-width: 48rem) {
    width: 2.5rem; // Adjust size for smaller screens
    height: 2.5rem; 
  }

  @media (max-width: 30rem) {
    width: 1.8rem; // Adjust size for even smaller screens
    height: 1.8rem; 
  }
`;
