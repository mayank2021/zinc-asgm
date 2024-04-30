/* eslint-disable react/prop-types */
import { Box, Chip, Stack, Typography } from "@mui/material";
import { Dropdown } from "./";

const TabPane = ({
  text,
  dropdownText,
  dropdownItems = [],
  onSelect,
  filter,
  onFilterRemove,
}) => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Typography
        component="div"
        variant="h4"
        sx={{ textTransform: "capitalize" }}
      >
        {text}
      </Typography>
      <Box display={"flex"} gap={2}>
        {filter && (
          <Chip label={filter} color="primary" onDelete={onFilterRemove} />
        )}
        {dropdownText && dropdownItems?.length && (
          <Dropdown
            dropdownText={dropdownText}
            dropdownItems={dropdownItems}
            onSelect={onSelect}
          />
        )}
      </Box>
    </Stack>
  );
};

export default TabPane;
