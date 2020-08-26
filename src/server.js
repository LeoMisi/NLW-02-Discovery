// Servidor
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

//Configurar nunjucks (Template Engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})

// Inicio e configuração do Servidor
server
// Receber os dados do Req.body
.use(express.urlencoded({extended: true}))
// Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// Rodas da aplicação
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.post("/save-classes", saveClasses)
// start do Servidor
.listen(5500)