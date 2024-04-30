import { Button, Stack, Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useProductContext } from "../context/ProductContext";

const CategoryFilter = () => {
  const {
    setProductItems,
    selectedCategory,
    setSelectedCategory,
    setShowFilterModal,
    allProducts,
  } = useProductContext();

  const categories = [...new Set(allProducts?.map((ele) => ele.category))];

  const hanldeFilterChange = (e) => {
    const { value } = e.target;
    if (selectedCategory?.includes(value)) {
      let updatedFiletrs = selectedCategory.filter((ele) => ele !== value);
      setSelectedCategory(updatedFiletrs);
    } else {
      setSelectedCategory((prev) => [value, ...prev]);
    }
  };

  const handleApplyFilters = () => {
    if (!selectedCategory?.length) return;

    const upadtedProductList = allProducts?.filter((ele) =>
      selectedCategory?.includes(ele.category)
    );
    setProductItems(upadtedProductList);
    setShowFilterModal(false);
  };
  return (
    <Stack>
      <Typography sx={{ fontSize: "1.2rem" }}>Categories</Typography>
      <FormGroup>
        {categories?.map((ele) => (
          <FormControlLabel
            key={ele}
            control={
              <Checkbox
                value={ele}
                onChange={hanldeFilterChange}
                checked={Boolean(selectedCategory?.includes(ele))}
              />
            }
            label={ele}
          />
        ))}
      </FormGroup>
      <Button
        variant="contained"
        size="small"
        sx={{ ml: "auto", px: 2 }}
        onClick={handleApplyFilters}
      >
        Apply
      </Button>
    </Stack>
  );
};

export default CategoryFilter;
