import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HouseIcon from "@mui/icons-material/House";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCartContext();

  const isHome = window.location.pathname == "/";
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            ZINC
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={() => (isHome ? navigate("/cart") : navigate("/"))}
            >
              {isHome ? (
                cartItems?.length ? (
                  <Badge badgeContent={cartItems?.length} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                ) : (
                  <ShoppingCartIcon />
                )
              ) : (
                <HouseIcon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
