import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import { UserContext } from "../../contexts/user-context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
// import { ReactComponent as Logo } from "../../assets/clothing.svg";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import LogoIcon from "../../components/icons/logo.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart-context";
// import ShoppingBagIcon from "../../components/shopping-bag-icon/shopping-bag-icon.component";

import { NavigationContainer } from "./navigation.styles.jsx";
import { LogoContainer } from "./navigation.styles.jsx";
import { NavLink } from "./navigation.styles.jsx";
import { NavigationList } from "./navigation.styles.jsx";
import { NavigationItem } from "./navigation.styles.jsx";


const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);


  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer>
          <NavLink to="/" ><LogoIcon /></NavLink>
        </LogoContainer>
        <NavigationList>
          <NavigationItem>
            <NavLink to="/shop">Shop</NavLink>
            {currentUser ? <NavLink as="span" onClick={signOutUser}>Sign Out</NavLink> : <NavLink to="/auth">SignIn</NavLink>}
            <CartIcon />
          </NavigationItem>
        </NavigationList>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;