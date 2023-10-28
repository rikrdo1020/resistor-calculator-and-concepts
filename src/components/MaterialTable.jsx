import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const MaterialTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="material-differences-table">
        <TableHead>
          <TableRow>
            <TableCell>Característica</TableCell>
            <TableCell>Material Intrínseco</TableCell>
            <TableCell>Material Extrínseco</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Composición
            </TableCell>
            <TableCell> Semiconductor puro sin dopantes </TableCell>
            <TableCell>
              {" "}
              Semiconductor con dopantes deliberados para modificar sus
              propiedades eléctricas{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Dopantes
            </TableCell>
            <TableCell> No contiene dopantes </TableCell>
            <TableCell> Contiene dopantes (tipo n o p) </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Conductividad eléctrica
            </TableCell>
            <TableCell> Baja </TableCell>
            <TableCell> Alta </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Portadores de carga
            </TableCell>
            <TableCell>
              {" "}
              Electrones y huecos en igual cantidad (equilibrio){" "}
            </TableCell>
            <TableCell>
              {" "}
              Dependiendo del tipo de dopante, hay una predominancia de
              portadores de carga (electrones o huecos){" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Propiedades
            </TableCell>
            <TableCell>
              {" "}
              Menor número de portadores de carga disponibles para la conducción
              eléctrica{" "}
            </TableCell>
            <TableCell>
              {" "}
              Mayor número de portadores de carga, lo que aumenta la
              conductividad eléctrica{" "}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MaterialTable;
