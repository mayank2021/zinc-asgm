import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  ProductContextProvider.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };
  const [productItems, setProductItems] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [range, setRange] = useState([10, 100]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        if (res.status === 200) {
          setProductItems(res.data);
          setAllProducts(res.data);
        } else {
          toast.error("Something went Wrong :(");
        }
      })
      .catch((err) => toast.error("Error : " + err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productItems,
        setProductItems,
        loading,
        selectedCategory,
        setSelectedCategory,
        showFilterModal,
        setShowFilterModal,
        allProducts,
        range,
        setRange,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
