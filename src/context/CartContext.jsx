import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  CartContextProvider.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const addItemToCart = (item) => {
    setCartItems((prev) => [{ ...item, quantity: 1 }, ...prev]);
    toast.success("Item successfully added!");
  };

  const removeItemFromCart = (item) => {
    const updatedCart = cartItems?.filter((ele) => ele.id !== item.id);
    setCartItems(updatedCart);
    toast.error("Item successfully removed!");
  };

  const isItemInTheCart = (itemId) => {
    return cartItems?.some((ele) => ele.id === itemId);
  };

  const incrementQuantity = (item) => {
    const updatedCart = cartItems?.map((ele) => {
      if (ele.id === item.id) {
        return {
          ...ele,
          quantity: ele.quantity + 1,
        };
      }
      return ele;
    });
    setCartItems(updatedCart);
  };

  const decrementQuantity = (item) => {
    const updatedCart = cartItems?.map((ele) => {
      if (ele.id === item.id) {
        return {
          ...ele,
          quantity: ele.quantity - 1,
        };
      }
      return ele;
    });
    setCartItems(updatedCart);
  };

  const deleteItemFromCart = (item) => {
    const updatedCart = cartItems?.filter((ele) => ele.id !== item.id);
    setCartItems(updatedCart);
    toast.error("Item successfully removed!");
  };

  const onSuccess = () => {
    navigate("/");
    setCartItems([]);
    setShowModal(false);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addItemToCart,
        removeItemFromCart,
        isItemInTheCart,
        incrementQuantity,
        decrementQuantity,
        deleteItemFromCart,
        showModal,
        setShowModal,
        onSuccess,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
