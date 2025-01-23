import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authenticaton from "./routes/authentication/authentication.component";
import Shop from "./components/shop/shop.component";
import CheckoutPage from "./routes/check-out/check-out.component";


function App() {

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
