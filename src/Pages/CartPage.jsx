import { Stack, Typography } from "@mui/material";
import {
  CartCard,
  Empty,
  CheckoutCard,
  ModalComp,
  CheckoutModalContent,
} from "../components";
import { useCartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const {
    cartItems,
    incrementQuantity,
    decrementQuantity,
    deleteItemFromCart,
    showModal,
    setShowModal,
    onSuccess,
  } = useCartContext();
  const navigate = useNavigate();

  return (
    <>
      {cartItems?.length ? (
        <Stack>
          <Typography component="div" variant="h4">
            Cart Page
          </Typography>
          <Stack>
            {cartItems?.map((ele) => (
              <CartCard
                key={ele.id}
                title={ele.title}
                image={ele.image}
                price={ele.price}
                category={ele.category}
                quantity={ele.quantity}
                incQty={() => incrementQuantity(ele)}
                decQty={() => decrementQuantity(ele)}
                deleteItem={() => deleteItemFromCart(ele)}
              />
            ))}
          </Stack>
          <CheckoutCard onCheckoutClick={() => setShowModal(true)} />
        </Stack>
      ) : (
        <Empty
          text="Your cart is Empty"
          buttonText="Add Items"
          onClick={() => navigate("/")}
        />
      )}
      <ModalComp open={showModal} onClose={onSuccess}>
        <CheckoutModalContent onSuccess={onSuccess} />
      </ModalComp>
    </>
  );
};

export default CartPage;
