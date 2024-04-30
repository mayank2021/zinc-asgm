/* eslint-disable react/prop-types */
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Dropdown({
  dropdownText,
  dropdownItems = [],
  onSelect,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (ele) => {
    setAnchorEl(null);
    if (!ele.target) onSelect?.(ele);
  };

  return (
    <div>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        onClick={handleClick}
      >
        {dropdownText}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {dropdownItems?.map((ele) => (
          <MenuItem key={ele} onClick={() => handleClose(ele)}>
            {ele}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
