import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
  }
`
export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
  span { 
    display: none; 
  } 
  &:nth-child(1)::after { 
    content: "Prod."; 
    display: block; 
    font-size: 15px; 
    text-align: center; 
  } 
    
  &:nth-child(2)::after { 
    content: "Desc."; 
    display: block; 
    font-size: 15px; 
    text-align: center; 
  } 

  &:nth-child(3)::after { 
    content: "Qty"; 
    display: block; 
    font-size: 15px; 
    text-align: center; 
  } 

  &:nth-child(4)::after { 
    content: "$"; 
    display: block; 
    font-size: 15px; 
    text-align: center; 
  } 

  &:nth-child(5)::after { 
    content: "Del."; 
    display: block; 
    font-size: 15px; 
    text-align: center; 
  } 

  @media (min-width: 769px) { 
    span { 
      display: inline; 
    } 
    &:nth-child(1)::after, 
    &:nth-child(2)::after, 
    &:nth-child(3)::after, 
    &:nth-child(4)::after, 
    &:nth-child(5)::after { 
      display: none; 
    }
  }
`;
export const Total = styled.span` 
  margin-top: 30px; 
  margin-left: auto; 
  font-size: 36px; 

  @media (max-width: 768px) { 
    font-size: 28px; 
    margin-top: 20px;
  } 
`;


