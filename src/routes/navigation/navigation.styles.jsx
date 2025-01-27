import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.nav`
  height: 4.3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 0 1.2rem;

  @media (max-width: 48rem) {
    flex-direction: column;
    height: auto;
    padding: 0.6rem;
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
  @media (max-width: 48rem) {
    justify-content: center;
    margin-bottom: 0.6rem; 
  }
  
`

export const NavLink = styled(Link)`
  margin-left: 0.9rem; 
  padding: 0.6rem 0.9rem; 
  cursor: pointer; 
  text-decoration: none; 
  color: inherit; /* Inherit color from parent */ 
  font-size: 1rem; 
  white-space: nowrap; 
  &:hover { 
    color: #5855f7; /* Hover effect on individual items */ 
  } 
  @media (max-width: 48rem) { 
    margin-left: 0; 
    padding: 0.6rem 1.2rem; 
  }
 
`

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  padding: 0;

  @media (max-width: 48rem) { 
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

  @media (max-width: 48rem) { 
    width: 100%; 
    justify-content: center; 
    margin-bottom: 0.6rem; 
  }
`
