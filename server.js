const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname)); // Sirve archivos estáticos como HTML y CSS

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
