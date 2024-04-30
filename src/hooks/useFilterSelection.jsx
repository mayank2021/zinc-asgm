import { useProductContext } from "../context/ProductContext";

const useFilterSelection = () => {
  const { productItems, setProductItems, setShowFilterModal } =
    useProductContext();

  const getLowerCase = (ele) => ele?.toString()?.toLowerCase();

  const handleFilterSelect = (ele, setSelectedFilter) => {
    if (
      getLowerCase(ele) === "by price" ||
      getLowerCase(ele) == "by category"
    ) {
      setShowFilterModal(true);
    } else if (getLowerCase(ele) == "price - low to high") {
      const sortedItems = productItems?.toSorted((a, b) => a?.price - b?.price);
      setProductItems(sortedItems);
    } else if (getLowerCase(ele) == "price - high to low") {
      const sortedItems = productItems?.toSorted(
        (a, b) => (a?.price - b?.price) * -1
      );
      setProductItems(sortedItems);
    } else if (getLowerCase(ele) == "rating - low to high") {
      const sortedItems = productItems?.toSorted(
        (a, b) => a?.rating.rate - b?.rating.rate
      );
      setProductItems(sortedItems);
    } else if (getLowerCase(ele) == "rating - high to low") {
      const sortedItems = productItems?.toSorted(
        (a, b) => (a?.rating.rate - b?.rating.rate) * -1
      );
      setProductItems(sortedItems);
    }
    setSelectedFilter(ele);
  };
  return { handleFilterSelect };
};

export default useFilterSelection;
