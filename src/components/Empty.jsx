/* eslint-disable react/prop-types */
import { Box, Button, Stack, Typography } from "@mui/material";
import EmptyImg from "../assets/empty.png";

const Empty = ({ text, buttonText, onClick }) => {
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={1}
    >
      <Box component={"img"} src={EmptyImg} sx={{ width: 200 }} />
      <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        {text}
      </Typography>
      {buttonText && (
        <Button variant="contained" sx={{ minWidth: 250 }} onClick={onClick}>
          {buttonText}
        </Button>
      )}
    </Stack>
  );
};

export default Empty;
