import {
  List,
  ListItem,
  ListItemText,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import BandaValencia from "./BandaValencia";
import BandaConductora from "./BandaConductora";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import MaterialTable from "./MaterialTable";
import TipoDeMaterialGrafico from "./TipoDeMaterialGrafico";

const Problema2 = () => {
  const [seleccion, setSeleccion] = useState("conductores");
  const [opcion, setOpcion] = useState("1");
  const [separacion, setSeparacion] = useState(0);
  const handleCambiarMaterial = (event, newValue) => {
    setSeleccion(newValue);
  };
  const handleCambiarOpcion = (event, newValue) => {
    setOpcion(newValue);
  };
  useEffect(() => {
    if (seleccion === "conductores") setSeparacion(0);
    if (seleccion === "semiconductores") setSeparacion(0);
    if (seleccion === "aislantes") setSeparacion(4);
  }, [seleccion, setSeparacion]);

  return (
    <Stack
      bgcolor="white"
      padding="2rem"
      borderRadius="0.5rem"
      gap={3}
      maxWidth="50rem"
      alignItems='center'
      flexDirection="row"
    >
      <Stack maxWidth='10rem'>
        <Tabs
          value={opcion}
          orientation="vertical"
          onChange={handleCambiarOpcion}
        >
          <Tab label="Conductor, Semiconductor y Aislante" value="1" />
          <Tab label="Intrinseco Extrinseco" value="2" />
          <Tab label="Tipo P - Tipo N" value="3" />
        </Tabs>
      </Stack>
      {(opcion === "1" && (
        <Stack>
          <Stack alignItems="center">
            <Tabs value={seleccion} onChange={handleCambiarMaterial}>
              <Tab label="Conductores" value="conductores" />
              <Tab label="Semiconductores" value="semiconductores" />
              <Tab label="Aislantes" value="aislantes" />
            </Tabs>
          </Stack>
          <Stack flexDirection="row" alignItems="center" minHeight={"27rem"}>
            <Stack>
              {seleccion === "conductores" && <Conductores />}
              {seleccion === "semiconductores" && <Semiconductores />}
              {seleccion === "aislantes" && <Aislantes />}
            </Stack>
            <Stack gap={separacion}>
              <BandaConductora />
              {(seleccion === "semiconductores" && (
                <Stack
                  flexDirection="row"
                  justifyContent="space-between"
                  width="100%"
                >
                  <ArrowUpwardIcon sx={{ color: "#ffaf03" }} />
                  <ArrowUpwardIcon sx={{ color: "#ffaf03" }} />
                  <ArrowUpwardIcon sx={{ color: "#ffaf03" }} />
                </Stack>
              )) ||
                (seleccion === "aislantes" && (
                  <Stack
                    flexDirection="row"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <CloseIcon sx={{ color: "#cb0101" }} />
                    <CloseIcon sx={{ color: "#cb0101" }} />
                    <CloseIcon sx={{ color: "#cb0101" }} />
                  </Stack>
                ))}
              <BandaValencia />
            </Stack>
          </Stack>
        </Stack>
      )) ||
        (opcion === "2" && <MaterialTable />)
        ||
        (opcion === "3" && <TipoDeMaterialGrafico />)}
    </Stack>
  );
};

export default Problema2;

function Conductores() {
  return (
    <Stack>
      <Typography variant="h6">Conductores</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Conductividad: Los conductores son materiales que tienen una alta conductividad eléctrica, lo que significa que permiten que los electrones se muevan libremente a través de ellos." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Bandas de energía: En los conductores, la banda de valencia y la banda de conducción se superponen, lo que permite que los electrones se desplacen con facilidad." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Ejemplos: Ejemplos de conductores incluyen metales como el cobre, la plata y el aluminio." />
        </ListItem>
      </List>
    </Stack>
  );
}

function Semiconductores() {
  return (
    <Stack>
      <Typography variant="h6">Semiconductores</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Conductividad: Los semiconductores tienen una conductividad eléctrica intermedia, lo que significa que conducen la electricidad mejor que los aislantes pero no tan eficientemente como los conductores." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Bandas de energía: En los semiconductores, la banda de valencia y la banda de conducción están separadas por un pequeño intervalo de energía llamado brecha de energía o banda prohibida." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Ejemplos: Ejemplos de semiconductores incluyen el silicio y el germanio. Los semiconductores son fundamentales en la electrónica y se utilizan en dispositivos como transistores y diodos." />
        </ListItem>
      </List>
    </Stack>
  );
}

function Aislantes() {
  return (
    <Stack>
      <Typography variant="h6">Aislantes</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Conductividad: Los aislantes tienen una conductividad eléctrica muy baja y, en su mayoría, no permiten que los electrones se muevan a través de ellos." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Bandas de energía: Los aislantes tienen una banda de valencia llena y una banda de conducción vacía, y la brecha de energía entre estas dos bandas es sustancial." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Ejemplos: Ejemplos de aislantes incluyen la madera, el vidrio, el plástico y la cerámica. Estos materiales se utilizan en aplicaciones donde se necesita un alto grado de resistencia eléctrica." />
        </ListItem>
      </List>
    </Stack>
  );
}
