/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const minDistance = 10;

export default function RangeSlider({ range, setRange, max, min }) {
  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setRange([Math.min(newValue[0], range[1] - minDistance), range[1]]);
    } else {
      setRange([range[0], Math.max(newValue[1], range[0] + minDistance)]);
    }
  };
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={range}
        onChange={handleChange}
        valueLabelDisplay="auto"
        disableSwap
        max={max}
        min={min}
      />
    </Box>
  );
}
