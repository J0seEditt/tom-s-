const express = require('express');
const router = express.Router();
router.get('/horariosFuncionamento', (req, res) => {
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

module.exports = router;