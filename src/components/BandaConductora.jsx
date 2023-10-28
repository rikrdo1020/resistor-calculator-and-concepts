import { Stack } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
const BandaConductora = () => {
  return (
    <Stack
      flexDirection="row"
      alignItems="end"
      sx={{
        bgcolor: "gray",
        height: "7rem",
        width: "10rem",
        justifyContent: "space-between",
        p: 3,
        paddingBottom: 0,
      }}
    >
      <RemoveCircleIcon sx={{ color: "black" }} />
      <RemoveCircleIcon sx={{ color: "black" }} />
      <RemoveCircleIcon sx={{ color: "black" }} />
    </Stack>
  );
};

export default BandaConductora;
