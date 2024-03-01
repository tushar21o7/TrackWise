import { Routes, Route } from "react-router-dom";
// import UserContext from "./contexts/UserContext";
import useLogout from "./customHooks/useLogout";

import {
  Home,
  HomeLayout,
  ProtectedRoute,
  Login,
  Register,
  ScrappedProducts,
  ScrappedSingleProduct,
  Products,
  SingleProduct,
  Error,
} from "./pages";

function App() {
  useLogout();

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="search/:productName" element={<ScrappedProducts />} />
        <Route
          path="search/:productName/:productId"
          element={<ScrappedSingleProduct />}
        />
        <Route
          path="products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="products/:productId"
          element={
            <ProtectedRoute>
              <SingleProduct />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
