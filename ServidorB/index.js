const express = require('express');
const app = express(); 
const route = express.Router();
const port = process.env.PORT || 3001;

listaProdutos = [
    {
        nome: "pacoca",
        preco: "1,0"
    }
]

route.post("/cadastrar_produto", async (req, res) => {
    const dado = req.body;
    res.json(await cadastrarProduto(dado));
});

async function cadastrarProduto(dado){
    listaProdutos.push(dado);
}

app.use(express.json());
app.use(route);

app.listen(port, () => {
    console.log('App listen on http://localhost:3001')
});