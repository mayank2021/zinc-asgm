import { useState } from "react";
import { Stack } from "@mui/material";
import {
  TabPane,
  ProductCard,
  Empty,
  ModalComp,
  CategoryFilter,
  PriceFilter,
} from "../components";
import { useCartContext } from "../context/CartContext";
import { useProductContext } from "../context/ProductContext";
import { filterOptions } from "../Data/filterOptions";
import useFilterSelection from "../hooks/useFilterSelection";

const ProductPage = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const {
    allProducts,
    productItems,
    setProductItems,
    showFilterModal,
    setShowFilterModal,
    setSelectedCategory,
    setRange,
  } = useProductContext();

  const { addItemToCart, removeItemFromCart, isItemInTheCart } =
    useCartContext();
  const { handleFilterSelect } = useFilterSelection();

  const removeFilters = () => {
    setSelectedCategory([]);
    setRange([10, 100]);
    setProductItems(allProducts);
    setSelectedFilter(null);
  };
  return (
    <>
      <TabPane
        text="products"
        dropdownText={"filters"}
        dropdownItems={filterOptions}
        onSelect={(ele) => handleFilterSelect(ele, setSelectedFilter)}
        filter={selectedFilter}
        onFilterRemove={removeFilters}
      />
      {productItems?.length ? (
        <Stack>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            py={2}
          >
            {productItems?.map((ele) => (
              <ProductCard
                key={ele?.id}
                title={ele.title}
                image={ele.image}
                price={ele.price}
                category={ele.category}
                rating={ele.rating}
                isInCart={isItemInTheCart(ele.id)}
                addItem={() => addItemToCart(ele)}
                removeItem={() => removeItemFromCart(ele)}
              />
            ))}
          </Stack>
        </Stack>
      ) : (
        <Empty text="Nothing to show" />
      )}
      <ModalComp
        open={showFilterModal}
        onClose={() => {
          setShowFilterModal(false);
          setSelectedFilter(null);
        }}
      >
        {selectedFilter?.includes("price") ? (
          <PriceFilter />
        ) : (
          <CategoryFilter />
        )}
      </ModalComp>
    </>
  );
};

export default ProductPage;
