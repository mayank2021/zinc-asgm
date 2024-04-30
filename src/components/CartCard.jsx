/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function CartCard({
  title,
  image,
  price,
  category,
  quantity,
  incQty,
  decQty,
  deleteItem,
}) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        display: "flex",
        my: 2,
        borderRight: `4px solid ${theme.palette.primary.main}`,
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 120, height: 120 }}
        image={image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            <b>${price}</b> &#183; {category}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton
              aria-label="previous"
              onClick={quantity == 1 ? deleteItem : decQty}
            >
              {quantity == 1 ? <DeleteIcon /> : <RemoveIcon />}
            </IconButton>
            <Typography component="div" variant="h5">
              {quantity}
            </Typography>
            <IconButton aria-label="next" onClick={incQty}>
              <AddIcon />
            </IconButton>
          </Box>
          <Button variant="contained" size="small" onClick={deleteItem}>
            Delete
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
