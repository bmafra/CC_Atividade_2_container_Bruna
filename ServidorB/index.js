const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use('/', (req, res) => {
    res.send("Rodando!")
});

app.listen(port, () => console.log("Porta" , port));