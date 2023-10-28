import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Paper, Typography } from "@mui/material";

const TipoDeMaterialGrafico = () => {
  const data = [
    {
      name: "Material Tipo n",
      electrones: 100, // Cantidad relativa de electrones
      huecos: 20, // Cantidad relativa de huecos
    },
    {
      name: "Material Tipo p",
      electrones: 20, // Cantidad relativa de electrones
      huecos: 100, // Cantidad relativa de huecos
    },
  ];

  return (
    <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Diferencias entre Material Tipo n y Tipo p
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Este gráfico de barras muestra la predominancia de electrones y huecos,
        como portadores de carga, en materiales dopados tipo n y tipo p
        respectivamente. Muestra claramente que en el material tipo n hay una
        mayor cantidad de electrones, mientras que en el material tipo p hay una
        mayor cantidad de huecos.
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="electrones"
            stackId="a"
            fill="#8884d8"
            name="Electrones"
          />
          <Bar dataKey="huecos" stackId="a" fill="#82ca9d" name="Huecos" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default TipoDeMaterialGrafico;
