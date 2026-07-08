const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json())
app.use(cors());
const port = 8000;

const agendamentosUser = []

app.post('/agendamento', (req, res) => {
    console.log(req.body);
    const agendamento = req.body;

    agendamentosUser.push(agendamento)
    res.send("Aqui deu certo")
})
app.get('/usuarios', (req, res) =>{
    res.status(200).json(user)
})
app.listen(port, () => {
    console.log("Serve ON");
    console.log(`Server is running on http://localhost:${port}/agendamento`);
    console.log('Press Ctrl+C to stop the server.');

});