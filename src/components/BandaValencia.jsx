import { Stack } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const BandaValencia = () => {
  return (
    <Stack
      flexDirection="row"
      sx={{
        bgcolor: "#99CB01",
        height: "7rem",
        width: "10rem",
        justifyContent: "space-between",
        p: 3,
        paddingTop: 0,
      }}
    >
      <AddCircleIcon sx={{ color: "white" }} />
      <AddCircleIcon sx={{ color: "white" }} />
      <AddCircleIcon sx={{ color: "white" }} />
    </Stack>
  );
};

export default BandaValencia;
