import express from 'express'

import {config} from '@interactiveninja/config-reader'
import cors from 'cors'
import { getQ, getQList } from './getQuote';

let manager = config("config.json")
let app = express()

app.use(cors())

const PORT = manager.get("port")

app.get("/",(res,req) =>{
    getQ().then(val => req.json(val)).catch(e => req.json(e))
})
app.get("/id/:id",(res,req) =>{
    getQ(Number(res.params.id)).then(val => req.json(val)).catch(e => req.json(e))
})

app.get("/list",(res,req) =>{
    req.json(getQList())
})



app.listen(PORT,() =>{
    console.log("Server läuft auf Port", PORT)
})