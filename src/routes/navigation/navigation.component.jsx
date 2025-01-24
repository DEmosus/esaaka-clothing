import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { selectCurrentUser } from "../../store/user/user.selector.js";
import { selectIsCartOpen } from "../../store/cart/cart.selector.js";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import LogoIcon from "../../components/icons/logo.component";
import { NavigationContainer } from "./navigation.styles.jsx";
import { LogoContainer } from "./navigation.styles.jsx";
import { NavigationList } from "./navigation.styles.jsx";
import { NavigationItem } from "./navigation.styles.jsx";
import { NavLink } from "./navigation.styles.jsx";


const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

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