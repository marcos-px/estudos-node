//Incluindo uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');

//Define o ip e a porta onde o código vai rodar
const hostname = '127.0.0.1';//localhost
const port = 3000;

//Regra de negócio - Implementação - cria o servidor
const server = http.createServer((req,res) => {

var resposta;

const urlParse = url.parse(req.url, true);
//Receber informações do usuario
const params = queryString.parse(urlParse.search);
//Criar um usuario - atualizar usuario
    if(urlParse.pathname == '/criar-usuario'){

//Salvar as informacoes sem DB
    fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
        if (err) throw err;
        console.log('Saved!');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(resposta);
          });

    resposta = 'Usuario criado com sucesso';
    }
//Selecionar usuario

    else if (urlParse.pathname == '/selecionar-usuario') {
    fs.readFile('users/' + params.id + '.txt', function(err, data) {
        resposta = data;
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(resposta);
          });
    }
    //Remover usuario
    else if (urlParse.pathname == '/remover-usuario') {
        fs.unlink('users/' + params.id + '.txt', function (err,data) {
            console.log('File deleted!');
            resposta = err ?'Usuário não encontrato' :'Usuário Removido';
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(resposta);
              });
        }
    
 
});


//Bloco de sustentação, execução
server.listen(port, hostname, () =>{
    console.log (`Server running at http://${hostname}:${port}/`);
});