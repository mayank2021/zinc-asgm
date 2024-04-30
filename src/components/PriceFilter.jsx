import { Button, Stack, Typography } from "@mui/material";
import { useProductContext } from "../context/ProductContext";
import { RangeSlider } from "./";

const PriceFilter = () => {
  const { allProducts, setProductItems, setShowFilterModal, range, setRange } =
    useProductContext();

  const sortedProducts = allProducts?.toSorted((a, b) => a.price - b.price);

  const handleApplyPriceFilter = () => {
    const updatedProductList = allProducts?.filter(
      (ele) => ele.price >= range[0] && ele.price <= range[1]
    );
    setProductItems(updatedProductList);
    setShowFilterModal(false);
  };
  return (
    <Stack direction={"column"} gap={2}>
      <Typography sx={{ fontSize: "1.2rem" }}>Price($)</Typography>
      <RangeSlider
        range={range}
        max={sortedProducts[sortedProducts.length - 1]?.price}
        min={sortedProducts[0]?.price}
        setRange={setRange}
      />
      <Typography sx={{ fontSize: "1.2rem" }}>
        Selected Range : {range[0]} - {range[1]}
      </Typography>
      <Button
        variant="contained"
        size="small"
        sx={{ ml: "auto", px: 2 }}
        onClick={handleApplyPriceFilter}
      >
        Apply
      </Button>
    </Stack>
  );
};

export default PriceFilter;
