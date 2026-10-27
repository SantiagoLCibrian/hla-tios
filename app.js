const express = require('express')
const path = require('node:path')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/saludo', (request, response)=>{
    response.json({mesaje: 'Hola desde mi app SLC'})

})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})