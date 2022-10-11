
const express = require("express");
const app = express(); 
const route = express.Router();
const port = process.env.PORT || 3000;

listaUsuario = [
    {
        user: "bruna",
        senha: "123"
    },
    {
        user: "vitinho",
        senha: "123"
    }
];

route.get('/', (req, res) => {
    console.log("foi");
})

route.post("/cadastrar_usuario", async (req, res) => {
    const dado = req.body;
    res.json(await cadastrarUsuario(dado));
});

async function cadastrarUsuario(dado){
    listaUsuario.push(dado);
}

route.get("/login",  async (req, res) => {
    
});

app.use(express.json());
app.use(route);

app.listen(port, () => {
    console.log('App listen on http://localhost:3000')
});

