import express,{json} from 'express'

import {config} from '@interactiveninja/config-reader'
import cors from 'cors'
import { getQ, getQList } from './getQuote';

let manager = config("config.json")
let app = express()

app.use(cors())
app.use(json())

const PORT = manager.get("port")

app.get("/",(req,res) =>{
    getQ(req.body).then(val => res.json(val)).catch(e => res.json(e))
})
app.get("/id/:id",(req,res) =>{
    getQ(req.body,Number(req.params.id)).then(val => res.json(val)).catch(e => res.json(e))
})

app.get("/list",(res,req) =>{
    req.json(getQList())
})



app.listen(PORT,() =>{
    console.log("Server läuft auf Port", PORT)
})