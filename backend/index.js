const express = require('express');

//Cria a aplicação
const app = express();

app.use(express.json());

/**
 * Tipos de parametros
 * 
 * Query Params:Parametros nomeados enviados na rota apos o '?',
 * Filtros, paginação
 * 
 * Route Params: Parametros utilizados para identificar recursos
 * 
 * Request Body:Corpo da requesição utilizxado para criar ou alterar 
 */
app.get('/',(req,res)=>{
   return  res.json({
       event:'Semana Omnistack 11.0',
       aluno:'Fernado Schimidt'
   });
})


app.listen(3333);