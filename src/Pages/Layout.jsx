import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const Layout = () => {
  return (
    <Stack>
      <Navbar />
      <Stack sx={{ p: 2, pt: 5 }}>
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default Layout;
