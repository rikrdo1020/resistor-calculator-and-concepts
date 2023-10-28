import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import { useState } from "react";

const Problema1 = () => {
  const [tipoCircuito, setTipoCircuito] = useState("");
  const [valores, setValores] = useState([]);
  const [resultado, setResultado] = useState(0);
  const [nuevoValor, setNuevoValor] = useState("");
  const [valorPrefijo, setValorPrefijo] = useState("1");
  const [inputError, setInputError] = useState(false);

  const handleChangeTipoCircuito = (event) => {
    setTipoCircuito(event.target.value);
    setValores([]);
    setNuevoValor("");
    setResultado(0);
  };

  const handleLimpiar = () => {
    setTipoCircuito("");
    setValores([]);
    setResultado(0);
    setNuevoValor("");
    setValorPrefijo("1");
  };

  const handleChangePrefijo = (e) => {
    setValorPrefijo(e.target.value);
  };

  const handleEditarValor = (indice) => {
    setNuevoValor(valores[indice].valor);
    setValorPrefijo(valores[indice].prefijo);
    setValores(valores.filter((e, index) => index !== indice));
  };

  const handleAgregarValor = () => {
    if (!esNumeroValido(nuevoValor)) {
      setInputError(true);
      return;
    }
    if (!nuevoValor) return;
    if (valores.length < (tipoCircuito === "serie" ? 5 : 3)) {
      setValores([...valores, { valor: nuevoValor, prefijo: valorPrefijo }]);
      setNuevoValor("");
    }
  };

  const calcularResistenciaEquivalente = () => {
    if (tipoCircuito === "serie") {
      const resistenciaEquivalente = valores.reduce(
        (total, valorObj) =>
          total + parseFloat(valorObj.valor) * valorObj.prefijo,
        0
      );
      setResultado(resistenciaEquivalente);
    } else if (tipoCircuito === "paralelo") {
      const inversos = valores.map(
        (valorObj) => 1 / (parseFloat(valorObj.valor) * valorObj.prefijo)
      );
      const sumaInversos = inversos.reduce(
        (total, inverso) => total + inverso,
        0
      );
      const resistenciaEquivalente = 1 / sumaInversos;
      setResultado(resistenciaEquivalente);
    }
  };
  return (
    <Stack>
      <Stack
        bgcolor="#dfdfdf"
        minHeight="5rem"
        sx={{ borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding="0 2rem"
      >
        <IconButton aria-label="delete" color="#f03f3f" onClick={handleLimpiar}>
          <CleaningServicesIcon />
        </IconButton>
        <Typography variant="h2" color="#313131">
          <span style={{ color: "#5e5e5e" }}>=</span>{" "}
          {resultado === 0
            ? 0
            : Number.isInteger(resultado)
            ? resultado
            : resultado.toFixed(5).replace(/(\.\d*?)(0+)?$/, "$1")}{" "}
          <span style={{ fontSize: "1.7rem", color: "#5e5e5e" }}>Ohms</span>
        </Typography>
      </Stack>
      <Stack
        bgcolor="white"
        p="2rem"
        gap={3}
        sx={{
          borderBottomLeftRadius: "0.5rem",
          borderBottomRightRadius: "0.5rem",
        }}
      >
        <Stack gap={2} flexDirection="row" alignItems="center">
          <Stack gap={2}>
            <FormControl>
              <InputLabel id="select-circuito">Circuito</InputLabel>
              <Select
                labelId="select-circuito"
                id="select1"
                value={tipoCircuito}
                label="Circuito"
                onChange={handleChangeTipoCircuito}
              >
                <MenuItem value={"serie"}>Serie</MenuItem>
                <MenuItem value={"paralelo"}>Paralelo</MenuItem>
              </Select>
            </FormControl>

            <Stack gap={1}>
              <Stack flexDirection="row" gap={1} flexWrap="wrap">
                <TextField
                  error={inputError}
                  helperText={inputError && "Formato no valido."}
                  type="text"
                  label="Valor"
                  placeholder="Nuevo Valor"
                  value={nuevoValor}
                  onChange={(e) => {
                    setInputError(false);
                    setNuevoValor(e.target.value);
                  }}
                />
                <FormControl>
                  <InputLabel id="select-prefijo">Unidad</InputLabel>
                  <Select
                    labelId="select-prefijo"
                    id="select1"
                    label="Circuito"
                    value={valorPrefijo}
                    onChange={handleChangePrefijo}
                  >
                    <MenuItem value="1">Ohms</MenuItem>
                    <MenuItem value="0.001">mOhms</MenuItem>
                    <MenuItem value="0.000001">µOhms</MenuItem>
                    <MenuItem value="1000">kOhms</MenuItem>
                    <MenuItem value="1000000">MOhms</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Button variant="outlined" onClick={handleAgregarValor}>
                Agregar Valor
              </Button>
            </Stack>
          </Stack>
          <Stack
            p={1}
            border="1px solid #cdc7c7"
            borderRadius="0.3rem"
            height="100%"
          >
            <Typography sx={{ color: "gray", p: 1 }}>
              Resistencias añadidas
            </Typography>
            {!valores.length ? (
              <Stack justifyContent="center" alignItems="center" height="100%">
                <Typography sx={{ color: "#cdc7c7", fontSize: "0.90rem" }}>
                  Vacio
                </Typography>
              </Stack>
            ) : (
              <List>
                {valores.map((valor, index) => (
                  <ListItem
                    key={index}
                    sx={{ border: "solid 1px #e9e9e9" }}
                    secondaryAction={
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleEditarValor(index)}
                      >
                        <EditIcon />
                      </IconButton>
                    }
                    variant="standard"
                  >
                    <ListItemText
                      primary={`${valor.valor} ${obtenerPrefijo(
                        valor.prefijo
                      )}`}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </Stack>
        </Stack>
        <Stack>
          <Button variant="contained" onClick={calcularResistenciaEquivalente}>
            Calcular
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Problema1;

function obtenerPrefijo(valor) {
  const prefijos = {
    1: "Ohms",
    0.001: "mOhms",
    0.000001: "µOhms",
    1000: "kOhms",
    1000000: "MOhms",
  };

  return prefijos[valor] || "";
}

function esNumeroValido(texto) {
  // La expresión regular permite números enteros o decimales con punto o coma
  // y asegura que no haya letras ni caracteres especiales.
  const expresionRegular = /^[-+]?\d*\.?\d*$/;
  return expresionRegular.test(texto);
}
