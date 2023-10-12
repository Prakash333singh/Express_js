 //
// const express =require('express');
// const app=express();
// const path=require('path');

// app.get('/',(req,res)=>{
//     res.send("<h1>hemlooooo </h1> ");
// })
// app.get('/contact',(req,res)=>{
//     res.send("<h1>contact Page!! </h1> ");
// })

// app.get('/files',(req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'));
// })

// app.get('/jsonres',(req,res)=>{
//     res.json([{
//         firstName:'john',
//         lastName:'cena'
//     },{
//         firstName:'Cody',
//         lastName:'Rhodes'
//     }]);
// })

// app.all('*',(req,res)=>{
//     res.send("Not Found");
// })



// app.listen(3000,()=>{
//     console.log("server chal rha hai"); 
// })

//43 min

// const express =require('express');
// const app=express();
// const phone=require('./data');


// app.get('/',(req,res) =>{
// res.send('<h1>Home Page </h1> <a href="/api/phone">Phone</a> ')

// })

// app.get('/api/phone',(req,res) =>{
//     const newItem= phone.map((product) =>{
//         const {id,name,image}=product;
//         return {id,name,image};
//     })
//     res.json(newItem);
// })

//for getting a particular product
// app.get('/api/phone/:phoneID',(req,res) =>{
//   const {phoneID}=req.params;
//   console.log(req.params);
//   const singleProduct= phone.find((product) =>product.id===Number(phoneID))
//   if(!singleProduct){
//     res.status(404).send('product not found....')
//   }
//   res.json(singleProduct);
// })

 //thunder  1 hour ke baad se
 //thundar helps in allowing to send http request and help in seeing the response in vs code only and for testing apis

//  const express=require('express');
//  const app=express();
//  const phone = require('./data')

// const logger=require('morgan');
   
//  const logger =(req,res,next)=>{
//   console.log(`${new Date()},Request[${req.method},[${req.url}]]`);
//   next();
//  }

//  const autorize =(req,res,next) =>{
//   console.log("i m 2nd one");
//   next();
//  }
//  app.use([autorize,logger]);

//   app.listen(3000,() =>{
//     console.log('Started'); 
//   })


// app.use(morgen);


// const express =require('express')
// const app=express();
// app.use(express.static('public'));
// app.use(express.urlencoded({extended:false}));

//in memory book collection 
// let books=[
//     {id:1,title: 'Book 1',author:'author 1'},
//     {id:2,title: 'Book 2',author:'author 2'}, 
// ]

//get method

// app.get('/books',(req,res) =>{
//     res.json(books);
// })

// //post method
// app.post('/books',(req,res) =>{
//     console.log(req.body);
//     const newBook ={
//         id:books.length+1,
//         title:req.body.title,
//         author:req.body.author
//     };
//     books.push(newBook);
//     res.status(201).json(newBook)
// })

// app.listen(8000,()=>{
//     console.log("started")
// })s

  
