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
else if (select_functionality === '--help') {
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
