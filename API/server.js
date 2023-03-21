const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db/produtos')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post("/produtos", async (req, res) => {
    const results = await db.createProduto(req.body)
    res.status(201).json({ id: results[0] })
})

app.patch("/produtos/:id/:quantidade", async (req, res) => {
    const id = await db.vendeProduto(req.params.id, req.params.quantidade)
    res.status(200).json({ id })
})

app.get("/produtos", async (req, res) => {
    const produtos = await db.getProdutos()
    res.status(200).json({ produtos })
})

app.delete("/produtos/:id", async (req, res) => {
    await db.deleteProduto(req.params.id)
    res.status(200).json({ success: true })
})

app.listen(3000, () => console.log('listening on port 3000'))