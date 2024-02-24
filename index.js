#!/usr/bin/env node
const domainprobe=require('domainprobe');

let select_functionality = process.argv[2];
let input = process.argv.slice(3);

if(select_functionality=='ip'){
    for(let i=0;i<input.length;i++){
    domainprobe.get_ip(input[i],(err,data)=>{
        if(err){
            console.error(err)
        }
        console.log('ip of '+ input[i])
        console.table(data);
    })}
}
else if(select_functionality=='hostname'){
    for(let i=0;i<input.length;i++){
    domainprobe.get_hostname(input[i],(err,data)=>{
        if(err){
            console.error(err)
        }
        console.log("hostname of "+ input[i])
        console.table(data)
    })}
}
else if(select_functionality=='domain-info'){
    for(let i=0;i<input.length;i++){
    domainprobe.data_extract(input[i],(err,data)=>{
        if(err){
            console.error(err)
        }
        console.log("domain information of "+ input[i])
        console.table(data);
    })}
}
else if(select_functionality=='ip-info'){
    for(let i=0;i<input.length;i++){
    domainprobe.data_extract_ip(input[i],(err,data)=>{
        if(err){
            console.error(err)
        }
        console.log("information of "+ input[i])
        console.table(data)
    })}
}
else if(select_functionality=='location'){
    for(let i=0;i<input.length;i+=2){
    domainprobe.exact_location(input[i],input[i+1],(err,data)=>{
        if(err){
            console.error(err)
        }
        console.log(`location of long ${input[i]} lat ${input[i+1]}`)
        console.table(data)
    })}
}
else if(select_functionality=='mx'){
    for(let i=0;i<input.length;i++){
    domainprobe.get_mx(input[i],(err,data)=>{
        if(err){
            console.error(err)
        }
        console.log("mx record of "+ input[i])
        console.log(data)
    })}
}
else if(select_functionality=='cname'){
    for(let i=0;i<input.length;i++){
    domainprobe.get_cname(input[i],(err,data)=>{
        if(err){
            console.error(err)
        }
        console.log("cname "+input[i])
        console.log(data)
    })}
}
else if (select_functionality == '--help') {
    console.log(`
Usage: domainprobe [operation] [input] [optional_input]

Operations:
  ip <domain>                    Get IP address of a domain
  hostname <ip_address>          Get hostname of an IP address
  domain-info <domain>           Extract information about a domain
  ip-info <ip_address>           Extract information about an IP address
  location <latitude> <longitude>  Get exact location based on latitude and longitude
  mx <domain>                    Get MX records of a domain
  cname <domain>                 Get CNAME record of a domain

Examples:
  domainprobe ip example.com
  domainprobe hostname 192.0.2.1
  domainprobe domain-info example.com
  domainprobe ip-info 192.0.2.1
  domainprobe location 37.7749 -122.4194
  domainprobe mx example.com
  domainprobe cname example.com
`);
}

else{
    console.log('invalid operation')
}
