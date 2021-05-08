import {config} from '@interactiveninja/config-reader'
let manager = config("config.json")

let json : [] = (manager.get("quotes") != undefined)? manager.get("quotes") : undefined 
export let getQ = (index? : number | undefined):Promise<{}> =>{
    return new Promise((res,rej) =>{

        if(json.length < 1) rej({error: "Config is not set correctly"});

        let i = (index !== undefined )? index : Math.floor(Math.random() * json.length);    
        if(i > json.length) rej({error:"Index to high"})
        res({index:i,text:json[i]})
    })
}

export let getQList = () : {id:number,value:string}[] =>{
    let fullList : {id:number,value:string}[] = [];
    for (let i = 0; i < json.length; i++) {
        fullList.push({id:i,value:json[i]})
        
    }

    return fullList;
}