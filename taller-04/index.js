const express = require('express')
const fs = require('fs')
const app = express();
app.use(express.json())

const usuarios = JSON.parse(fs.readFileSync('./24-taller-04-datos.json','utf8'))



// Punto 1: Endpoint /users/hobby
app.get('/users/hobby', (req, res) => {
    const { hobby } = req.query;
    const resultado = usuarios.filter(usuario => usuario.hobbies.includes(hobby));
    res.json(resultado);
});

// Punto 2: Endpoint /users/exists
app.get('/users/exists', (req, res) => {
    const { codigo } = req.query;
    const existe = usuarios.some(usuario => usuario.codigo === codigo);
    res.json({ existe });
});

// Punto 3: Endpoint /users/hobby/count
app.get('/users/hobby/count', (req, res) => {
    const { hobby } = req.query;
    const cantidad = usuarios.filter(usuario => usuario.hobbies.includes(hobby)).length;
    res.json({ cantidad });
});

// Punto 4: Endpoint /users/is-free
app.get('/users/is-free', (req, res) => {
    const resultado = usuarios.filter(usuario => usuario.hobbies.length < 3);
    res.json(resultado);
});


// Punto 5: Endpoint /users/suggest
app.post('/users/suggest', (req, res) => {
    const { codigo, hobby } = req.body;
    const usuario = usuarios.find(usuario => usuario.codigo === codigo);

    if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (usuario.hobbies.length >= 3) {
        return res.status(400).json({ error: "El usuario ya tiene 3 hobbies" });
    }

    usuario.hobbies.push(hobby);

    // Guardar los cambios en el archivo JSON
    fs.writeFileSync('./24-taller-04-datos.json', JSON.stringify(usuarios, null, 2));

    res.json(usuario);
});



// Punto 6: Endpoint /users (Registro de nuevo usuario)
app.post('/users', (req, res) => {
    const usuarioNuevo = req.body;

    if (!usuarioNuevo.codigo || !usuarioNuevo.nombre || !usuarioNuevo.apellido || usuarioNuevo.hobbies.length < 2) {
        return res.status(400).json({ error: "Datos inválidos o incompletos" });
    }

    usuarios.push(usuarioNuevo);

    // Guardar el nuevo usuario en el archivo JSON
    fs.writeFileSync('./24-taller-04-datos.json', JSON.stringify(usuarios, null, 2));

    res.json(usuarioNuevo);
});


//iniciando el servidor 

const PORT = 3000;
app.listen(PORT,()=>{
    console.log('servidor corriendo ')
})