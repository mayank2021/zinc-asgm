/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import VerifiedIcon from "@mui/icons-material/Verified";
import CheckoutImg from "../assets/checkout.gif";
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";

const CheckoutModalContent = ({ onSuccess }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
        <VerifiedIcon
          sx={{ fontSize: "2rem", color: theme.palette.success.main }}
        />
        <Typography id="modal-modal-title" variant="h4" component="h2">
          Order Received
        </Typography>
      </Box>

      <Box component="img" sx={{ width: 120, my: 2 }} src={CheckoutImg} />
      <Typography
        id="modal-modal-description"
        sx={{ fontSize: "1.2rem", mb: 1 }}
      >
        Thank you for shopping with us.
      </Typography>
      <Button fullWidth variant="contained" onClick={onSuccess}>
        Go on!
      </Button>
    </Box>
  );
};

export default CheckoutModalContent;
