import { Routes, Route } from "react-router-dom";
import { ProductPage, CartPage, Layout } from "./Pages";
import { Loader, NotFound } from "./components";
import { useProductContext } from "./context/ProductContext";

const App = () => {
  const { loading } = useProductContext();

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
