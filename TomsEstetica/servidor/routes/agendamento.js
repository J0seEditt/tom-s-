const express = require('express');
const router = express.Router();


const agendamentosUser = []

router.post('/agendamento', (req, res) => {
    console.log(req.body);
    const agendamento = req.body;

    agendamentosUser.push(agendamento)
    res.send("Aqui deu certo")
})

module.exports = router;