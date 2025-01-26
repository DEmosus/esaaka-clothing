import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { createUserProfileDocument, onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.reducer";
import Spinner from "./components/spinner/spinner.component";

const Shop = lazy(() => import("./components/shop/shop.component"));
const CheckoutPage = lazy(() => import("./routes/check-out/check-out.component"));
const Navigation = lazy(() => import("./routes/navigation/navigation.component"));
const Home = lazy(() => import("./routes/home/home.component"));
const Authenticaton = lazy(() => import("./routes/authentication/authentication.component"));

import { GlobalStyles } from "../global.styles";
// import CookieConsent from "react-cookie-consent";

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserProfileDocument(user);
      }
      dispatch(setCurrentUser(user));
    })
    return unsubscribe;
  }, [dispatch])

  return (
    <>
      {/* <CookieConsent
        location="bottom"
        buttonText="I understand"
        style={{ background: "#2B373B", height: "2.5rem", fontSize: "10px" }}
        buttonStyle={{ color: "#4e503b", fontSize: "10px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>Learn more about our <a href="/cookie-policy">cookie policy</a>.</span>
      </CookieConsent> */}
      <Suspense fallback={<Spinner />}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Navigation />} >
            <Route index element={<Home />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="auth" element={<Authenticaton />} />
            <Route path="checkout" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
