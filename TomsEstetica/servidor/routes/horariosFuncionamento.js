const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());

const port = 8000;

app.get('/horariosFuncionamento', (req, res) => {
    const listaDeHorariosFuncionamento = [
        
            { "dia": "Segunda-feira 09:00 às 18:00" },
            { "dia": "Terça-feira 09:00 às 18:00" },
            { "dia": "Quarta-feira 09:00 às 18:00" },
            { "dia": "Quinta-feira 09:00 às 18:00" },
            { "dia": "Sexta-feira 09:00 às 18:00" },
            { "dia": "Sábado 09:00 às 18:00" }
        
    ]

    return res.json({
        horariosFuncionamento: listaDeHorariosFuncionamento
    });
});


app.listen(port, () => {
    console.log("Serve ON");
    console.log(`Server is running on http://localhost:${port}/horariosFuncionamento`);
    console.log('Press Ctrl+C to stop the server.');

});