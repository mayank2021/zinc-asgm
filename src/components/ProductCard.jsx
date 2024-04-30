/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import { useTheme } from "@emotion/react";

export default function ProductCard({
  title,
  image,
  price,
  category,
  rating,
  addItem,
  isInCart,
  removeItem,
}) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 300,
        m: 2,
        borderBottom: `2px solid ${theme.palette.primary.main}`,
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent p={0}>
        <Typography gutterBottom variant="h6" component="div">
          {title.slice(0, 18)}...
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {category}
        </Typography>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography gutterBottom variant="h5" component="div">
            ${price}
          </Typography>
          <Stack direction={"row"} alignItems={"center"} gap={0.5}>
            <StarIcon />
            <Typography variant="body2" color="text.secondary">
              {`${rating.rate}(${rating.count})`}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions sx={{ mt: "auto" }}>
        <Button
          fullWidth
          variant={isInCart ? "outlined" : "contained"}
          color={isInCart ? "error" : "primary"}
          size="small"
          onClick={isInCart ? removeItem : addItem}
        >
          {isInCart ? "Remove Item" : "Add item"}
        </Button>
      </CardActions>
    </Card>
  );
}
