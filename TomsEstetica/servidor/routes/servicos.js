const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const router = express.Router();



app.get('/servicos', (req, res) => {
    const catalogoServicosCarros = [
        {
            "titulo": "Lavagem Express",
            "descricao": "inclui limpeza de pintura, rodas, aspiração e revitalização de pneus, custando R$50,00 para Hatch, R$60,00 para Sedan/SUV e R$70,00 para caminhonetes"
        },
        {
            "titulo": "Lavagem Premium",
            "descricao": "adiciona detalhamento de emblemas, restauração de plásticos e enceramento, com valores entre R$120,00 e R$160,00."
        },
        {
            "titulo": "Polimento Comercial",
            "descricao": "remove até 70% dos riscos (de R$350,00 a R$550,00),"
        },
        {
            "titulo": "Higienização Interna",
            "descricao": "cobre a limpeza profunda de bancos, teto, carpete, cintos e ar-condicionado, com preços de R$250,00 a R$300,00."
        },
        {
            "titulo": "Restauração de Faróis",
            "descricao": "a partir de R$150,00"
        },
        {
            "titulo": "Polimento Técnico",
            "descricao": "atinge até 95% de remoção (de R$600,00 a R$800,00). A empresa oferece pacotes combinados (Stage I, II e III) que unem lavagem, higienização e polimento, custando entre R$690,00 e R$1.500,00."
        }
    ]

    const catalogoServicosMotos = [
        {
            "titulo": "Lavagem Express",
            "descricao": "sai a partir de R$40,00 e foca em limpeza simples com lubrificação de corrente"
        },
        {
            "titulo": "Lavagem Premium",
            "descricao": "partir de R$80,00, inclui detalhamento de cantos, restauração de plásticos e proteção antioxidante do motor."
        },
        {
            "titulo": "Stage",
            "descricao": "Stage I (a partir de R$180,00) inclui polimento de pintura, e o Stage II (a partir de R$250,00) oferece desmontagem completa e polimento técnico."
        }
    ]

    return res.json({
        carros: catalogoServicosCarros,
        motos: catalogoServicosMotos
    });
});


app.listen(port, () => {
    console.log("Serve ON");
    console.log(`Server is running on http://localhost:${port}/servicos`);
    console.log('Press Ctrl+C to stop the server.');

}); 


