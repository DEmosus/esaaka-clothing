import styled from "styled-components";

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;


  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  h2 {
    font-size: 22px;
    margin-bottom: 6px;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    min-width: 100%;
    height: auto;
    margin: 0 0 15px 0;

    h2 {
    font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const BackgroundImage = styled.img`
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    width: 100%; 
    height: auto; 
    object-fit: cover;
  }
`;

export const DirectoryBodyContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  /* opacity: 0.9; */

  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  @media (max-width: 768px) {
    height: auto;
    padding: 10px;
  }
`;