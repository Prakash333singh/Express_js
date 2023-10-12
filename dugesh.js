//http
// const http=require("http");

// const server=http.createServer((req,res)=>{

  
//     res.writeHead(200,{"content-type":"text/html"});
//     res.write("<h1>helll jiii</h1>");
//     res.write("<h2>ok nice work</h2>");
//     res.write("<button>click me</button>");

//     res.end("okee jii ");
//     console.log("hello");
// })

// server.listen(3000);

//readfile,writefile,appendfile,deletefile


const fs=require('fs');
//readfile


///sync method
// fs.readFile("./abc.txt",(error,data)=>{
//     if(error){
//         console.log("error");
//         console.log(error);
//     }else{
//         console.log(data.toString());
//     }
// })
// console.log("terminated");


//writefile
// let content="wow this is dynamic content"

// fs.writeFile('new_file.txt',content,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
// console.log("saved");
//     }
// })