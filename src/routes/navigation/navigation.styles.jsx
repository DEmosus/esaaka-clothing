import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
`
export const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  svg { 
    max-width: 100%; 
    max-height: 100%;
    height: auto; 
    width: auto; 
  } 
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 10px; 
  }
  
`

export const NavLink = styled(Link)`
  margin-left: 15px; 
  padding: 10px 15px; 
  cursor: pointer; 
  text-decoration: none; 
  color: inherit; /* Inherit color from parent */ 
  font-size: 16px; 
  white-space: nowrap; 
  &:hover { 
    color: #5855f7; /* Hover effect on individual items */ 
  } 
  @media (max-width: 768px) { 
    margin-left: 0; 
    padding: 10px 20px; 
  }
 
`

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) { 
    flex-direction: column; 
    align-items: center; 
  }
`

export const NavigationItem = styled.li`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) { 
    width: 100%; 
    justify-content: center; 
    margin-bottom: 10px; 
  }
`
