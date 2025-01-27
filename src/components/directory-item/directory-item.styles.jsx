import styled from "styled-components";

export const DirectoryItemContainer = styled.div`
  flex-basis: 30%; //new
  /* min-width: 30%; */
  height: 15rem;
  flex-grow: 1; // new
  /* flex: 1 1 auto; */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 0.4rem 0.9rem;
  overflow: hidden;


  &:first-child {
    margin-right: 0.4rem;
  }

  &:last-child {
    margin-left: 0.4rem;
  }

  h2 {
    font-size: 1.3rem;
    margin-bottom: 0.3rem;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 1rem;
  }

  @media (max-width: 48rem) {
    flex-basis: 100%; //new
    /* min-width: 100%; */
    height: auto;
    margin: 0 0 0.9rem 0;

    h2 {
    font-size: 1.1rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

export const BackgroundImage = styled.img`
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  width: 80vw;
  height: 18rem;//new
  /* height: 100%; */
  background-size: cover;
  background-position: center;
  object-fit: cover;

  @media (max-width: 48rem) {
    width: 100%; 
    height: auto; 
    object-fit: cover;
  }
`;

export const DirectoryBodyContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  /* opacity: 0.9; */

  height: 5.6rem;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  @media (max-width: 48rem) {
    height: 5rem;
    padding: 0.6rem;
  }
`;