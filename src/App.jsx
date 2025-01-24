import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { createUserProfileDocument, onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authenticaton from "./routes/authentication/authentication.component";
import Shop from "./components/shop/shop.component";
import CheckoutPage from "./routes/check-out/check-out.component";
import { setCurrentUser } from "./store/user/user.reducer";

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

    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authenticaton />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>

  )
}

export default App
