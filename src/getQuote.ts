import {config} from '@interactiveninja/config-reader'
let manager = config("config.json")

let json : [] = (manager.get("quotes") != undefined)? manager.get("quotes") : undefined 
export let getQ = (index? : number | undefined):Promise<{}> =>{
    return new Promise((good,bad) =>{

        if(json.length < 1) bad({error: "Config is not set correctly"});

        let i = (index !== undefined )? index : Math.floor(Math.random() * json.length);    
        if(i > json.length) bad({error:"Index to high"})
        good({index:i,text:json[i]})
    })
}