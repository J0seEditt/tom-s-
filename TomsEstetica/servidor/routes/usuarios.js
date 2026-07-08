const express = require('express');
const router = express.Router();
const listaUser = []
router.get("/usuarios", (req, res) => {
    res.json(listaUser);
});
router.post('/usuarios', (req, res) => {
    const user = req.body;
    listaUser.push(user)
    console.log(req.body)
    res.json({
        mensagem: "Usuário cadastrado com sucesso"
    });
 
});

module.exports = router;