import {
  BottomNavigation,
  BottomNavigationAction,
  Stack,
  Typography,
} from "@mui/material";
import Problema1 from "./components/Problema1";
import Problema2 from "./components/Problema2";
import { useState } from "react";
import CalculateIcon from "@mui/icons-material/Calculate";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";

function App() {
  const [opcion, setOpcion] = useState(0);

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      bgcolor="#b1d5ff"
      height="100vh"
    >
      <Stack justifyContent="end" p={1} height="12rem">
        <BottomNavigation
          sx={{ borderRadius: "0.5rem" }}
          showLabels
          value={opcion}
          onChange={(event, newValue) => {
            setOpcion(newValue);
          }}
        >
          <BottomNavigationAction
            label="Calculadora"
            icon={<CalculateIcon />}
          />
          <BottomNavigationAction label="Conceptos" icon={<DonutSmallIcon />} />
        </BottomNavigation>
      </Stack>
      <Stack flex={1} justifyContent="start" p={1}>
        {(opcion === 0 && <Problema1 />) || (opcion === 1 && <Problema2 />)}
      </Stack>

      <Stack justifyContent="center" alignItems="center" padding={1}>
        <Typography>&copy; 2023 Ricardo Barria - Electrónica Básica</Typography>
      </Stack>
    </Stack>
  );
}

export default App;
