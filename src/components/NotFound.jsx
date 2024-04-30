import { Box, Stack, Typography } from "@mui/material";
import NotFoundIMg from "../assets/notFound.gif";

const NotFound = () => {
  return (
    <Stack
      sx={{ height: "100vh", width: "100%", position: "fixed" }}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
    >
      <Box sx={{ width: 250 }} component={"img"} src={NotFoundIMg} />
      <Typography sx={{ fontSize: "3rem", fontWeight: "bold" }}>404</Typography>
    </Stack>
  );
};

export default NotFound;
