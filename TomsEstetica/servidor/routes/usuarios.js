const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json())
const port = 8000;

const listaUser = []

app.post('/usuarios', (req, res) => {
    const user  = req.body;
    listaUser.push(user)
    console.log(req.body)
    res.send("Aqui deu certo")

});




app.listen(port, () => {
    console.log("Serve ON");
    console.log(`Server is running on http://localhost:${port}/usuarios`);
    console.log('Press Ctrl+C to stop the server.');

}); 
