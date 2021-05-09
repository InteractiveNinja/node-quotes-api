import express,{json} from 'express'

import {config} from '@interactiveninja/config-reader'
import cors from 'cors'
import { getQ, getQList } from './getQuote';

let manager = config("config.json")
let app = express()

app.use(cors())
app.use(json())

const PORT = manager.get("port")

app.post("/",(req,res) =>{
    getQ(req.body).then(val => res.json(val)).catch(e => res.json(e))
})
app.post("/id/:id",(req,res) =>{
    getQ(req.body,Number(req.params.id)).then(val => res.json(val)).catch(e => res.json(e))
})

app.post("/list",(req,res) =>{
    res.json(getQList(req.body))
})



app.listen(PORT,() =>{
    console.log("Server läuft auf Port", PORT)
})