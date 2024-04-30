import { Box, Stack } from "@mui/material";
import LoaderImg from "../assets/loader.gif";

const Loader = () => {
  return (
    <Stack
      sx={{ height: "100vh", width: "100%", position: "fixed" }}
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box sx={{ width: 150 }} component={"img"} src={LoaderImg} />
    </Stack>
  );
};

export default Loader;
