#!/usr/bin/env node
const domainprobe=require('domainprobe');

let select_functionality = process.argv[2];
let input = process.argv[3];
let input2=process.argv[4];
if(select_functionality==='ip'){
    domainprobe.get_ip(input,(err,data)=>{
        if(err){
            console.error(err)
        }
        console.table(data);
    })
}
else if(select_functionality==='hostname'){
    domainprobe.get_hostname(input,(err,data)=>{
        if(err){
            console.error(err)
        }
        console.table(data)
    })
}
else if(select_functionality==='domain-info'){
    domainprobe.data_extract(input,(err,data)=>{
        if(err){
            console.error(err)
        }
        console.table(data);
    })
}
else if(select_functionality==='ip-info'){
    domainprobe.data_extract_ip(input,(err,data)=>{
        if(err){
            console.error(err)
        }
        console.table(data)
    })
}
else if(select_functionality==='location'){
    domainprobe.exact_location(input,input2,(err,data)=>{
        if(err){
            console.error(err)
        }
        console.table(data)
    })
}
else if(select_functionality==='mx'){
    domainprobe.get_mx(input,(err,data)=>{
        if(err){
            console.error(err)
        }
        console.log(data)
    })
}
else if(select_functionality==='cname'){
    domainprobe.get_cname(input,(err,data)=>{
        if(err){
            console.error(err)
        }
        console.log(data)
    })
}
else{
    console.log('invalid operation')
}
