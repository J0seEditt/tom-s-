const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const port = 8000;
const servicos = require("./routes/servicos");
const horariosFuncionamento = require("./routes/horariosFuncionamento");
const agendamento = require("./routes/agendamento");
const usuarios = require("./routes/usuarios");

app.use(servicos);
app.use(horariosFuncionamento);
app.use(agendamento);
app.use(usuarios);

app.listen(port, () => {
    console.log("Serve ON");
  console.log(`Server is running on http://localhost:${port}`);
  console.log('Press Ctrl+C to stop the server.');

});
