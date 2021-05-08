import {config} from '@interactiveninja/config-reader'
import * as env from 'dotenv'

let manager = config("config.json")
let json : [] = (manager.get("quotes") != undefined)? manager.get("quotes") : undefined 

env.config()


export let getQ = (formData:{key:string},id? : number | undefined):Promise<{}> =>{
    return new Promise((res,rej) =>{
        if(formData.key == undefined || formData.key == "" || !isValideKey(formData.key) ) rej({error:"no valide apikey"})
        if(json.length < 1) rej({error: "Config is not set correctly"});

        let i = (id !== undefined )? id : Math.floor(Math.random() * json.length);    
        if(i > json.length) rej({error:"id not found"})
        res({id:i,text:json[i]})
    })
}

/**
 * Prüft den API Key
 * @param key Formdata Key
 * @returns true wenn Key gültig ist
 */
let isValideKey = (key: string): boolean =>
{

   return (key == process.env.KEY)
}

export let getQList = () : {id:number,value:string}[] =>{
    let fullList : {id:number,value:string}[] = [];
    for (let i = 0; i < json.length; i++) {
        fullList.push({id:i,value:json[i]})
        
    }

    return fullList;
}