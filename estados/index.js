const http = require('http');
const url = require('url');
const queryString = require('query-string');
const listEstados = require("./database/estados.json");

const server = http.createServer((request, response) => {

    const params = queryString.parse(url.parse(request.url, true).search);

    let resposta;

    if(params.pergunta == 'healthcheck'){
        resposta = 'Servidor sendo executado normalmente';
    }
    else{
        resposta = 'Verifique a rota e tente novamente';
    }

    response.setHeader('Access-Control-Allow-Origin', '*');//PERMITE QUE ACESSA TODAS AS ORIGENS.
    response.write(JSON.stringify(listEstados));
    response.end(resposta);
});

server.listen(8020);