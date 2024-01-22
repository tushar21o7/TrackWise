import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import {
  HomeLayout,
  Home,
  Login,
  Register,
  ScrappedProducts,
  ScrappedSingleProduct,
  Products,
  SingleProduct,
  ProtectedRoute,
  Error,
} from "./pages";

function App() {
  return (
    <UserContext>
      <BrowserRouter>
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
      </BrowserRouter>
    </UserContext>
  );
}

export default App;
