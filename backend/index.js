const express = require('express');

//Cria a aplicação
const app = express();

app.get('/',(req,res)=>{
   return  res.json({
       event:'Semana Omnistack 11.0',
       aluno:'Fernado Schimidt'
   });
})


app.listen(3333);