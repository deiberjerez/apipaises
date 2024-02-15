const express = require('express');
const conectarDB = require("../db/conectiondb.js")
const modelCountry = require("../db/modelCountry.js")
const cors = require("cors")
const app = express()
const port = 3001

app.use(express.json())
app.use(cors())

//get para recibir datos
app.get('/countries', async (req, res) => {
    const response = await modelCountry.find({})
    res.json(response)
})
app.get('/countries/:code', async (req, res) => {
    const code = req.params.code
    const response = await modelCountry.findOne({ code: code })
    res.json(response)
})

//post para enviar datos
app.post('/countries', async (req, res) => {
    const body = req.body
    await modelCountry.create(body)
    res.json({
        message: "El objeto se creo de manera exitosa",
        body: body
    })
})

//put para actualizar
app.put('/country', async (req, res) => {
    const body = req.body
    const code = req.query.code
    const updatedCountry = await modelCountry.findOneAndUpdate({ code: code }, body, {
        new: true
    })
    if (updatedCountry) {
      res.json({
        message: "El objeto se actualizo de manera exitosa",
      })
    }else {
      res.status(404).json({
        message: "El objeto no fue encontrado",
      })
    }
})

//Delete para eliminar pais
app.delete('/country', async (req, res) => {
    const code = req.query.code;
    const deletedCountry = await modelCountry.findOneAndDelete({ code: code });
    if (deletedCountry) {
      res.json({
        message: "El país fue eliminado",
        deletedCountry,
      });
    } else {
      res.status(404).json({
        message: "El país no fue encontrado",
      });
    }
  });

conectarDB()

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

