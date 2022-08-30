//Incluindo uma biblioteca
const http = require('http');
const url = require('url');

//Define o ip e a porta onde o código vai rodar
const hostname = '127.0.0.1';//localhost
const port = 3000;
const queryString = require('query-string');

//Regra de negócio - Implementação - cria o servidor
const server = http.createServer((req,res) => {

    //Pegar a pergunta na url
    const params = queryString.parse(url.parse(req.url, true).search);

    //Verificar a pergunta e escolher uma resposta
let resposta;

    if(params.pergunta == 'melhor-filme'){
        resposta = 'Titanic';
    }
    else if(params.pergunta == 'melhor-tecnologia-backend'){
        resposta = 'node-js';
    }
    else{
        resposta = 'Não sei, desculpa :-(';
    }

    //Retornar a resposta escolhida

   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end(resposta); 
});


//Bloco de sustentação, execução
server.listen(port, hostname, () =>{
    console.log (`Server running at http://${hostname}:${port}/`);
});