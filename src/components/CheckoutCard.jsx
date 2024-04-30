/* eslint-disable react/prop-types */
import { Button, Typography, Box, Paper } from "@mui/material";
import { useCartContext } from "../context/CartContext";

const CheckoutCard = ({ onCheckoutClick }) => {
  const { cartItems } = useCartContext();

  const totalAmount = cartItems.reduce(
    (acc, cur) => acc + Number(cur.price) * Number(cur.quantity),
    0
  );

  return (
    <Paper sx={{ p: 1, display: "flex", flexDirection: "column", gap: 1 }}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography variant="h5">Total Amount</Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          ${String(totalAmount).slice(0, 8)}
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="success"
        fullWidth
        onClick={onCheckoutClick}
      >
        Check out
      </Button>
    </Paper>
  );
};

export default CheckoutCard;
