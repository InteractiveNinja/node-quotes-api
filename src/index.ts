import express from 'express'

import {config} from '@interactiveninja/config-reader'

import { getQ } from './getQuote';

let manager = config("config.json")
let app = express()

const PORT = manager.get("port")

app.get("/",(res,req) =>{
    getQ().then(val => req.json(val)).catch(e => req.json(e))
})
app.get("/:id",(res,req) =>{
    getQ(Number(res.params.id)).then(val => req.json(val)).catch(e => req.json(e))
})



app.listen(PORT,() =>{
    console.log("Server läuft auf Port", PORT)
})