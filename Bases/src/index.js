//importar y arrancar express
const express=require("express");
const app=express();
app.get("/blog",function(req,res){
    return res.json({mensaje:"Saludos pibes"})
})
//levantar servidor
app.listen(3000,function(){
    console.log("Mi servidor NODE.js");
})

