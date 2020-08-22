const proffys = [
  { 
    name: "Leonardo Miranda",
    avatar: "https://avatars0.githubusercontent.com/u/62682298?s=460&u=aceca9a0450bd2ecb63634ea020327b99524c103&v=4",
    whatsapp: "199981273843",
    bio: "Entusiasta Saleforce. Apaixonado por Desenvolvimento, Tecnologia, Inovação e Marketing.",
    subject: "Marketing Cloud Developer",
    cost: "80",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
  },
  { 
    name: "Youssef Kanso",
    avatar: "https://trailblazer.me/profilephoto/7291I000001DRK4/M",
    whatsapp: "199981273843",
    bio: "Entusiasta Saleforce. Apaixonado por Desenvolvimento, Tecnologia, Inovação e Marketing.",
    subject: "Marketing Cloud Consultant",
    cost: "100",
    weekday: [1],
    time_from: [720],
    time_to: [1220]
  }
]

const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física", 
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química"
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

//Funcionalidades

function getSubject(subjectNumber){
  const position = +subjectNumber - 1
  return subjects[position]
}

function pageLanding(req, res){
  return res.render("index.html")
}

function pageStudy(req, res){
  const filters = req.query
  return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
  const data = req.query

  // Se tiver data
  const isNotEmpty = Object.keys(data).length > 0
  if(isNotEmpty){
    data.subject = getSubject(data.subject)

    //Adicionar data a lista de proffys
    proffys.push(data)
  
    return res.redirect("/study")
  }

  //Se não, mostar a página
  return res.render("give-classes.html", {subjects, weekdays})
}

// Servidor
const express = require('express')
const server = express()

//Configurar nunjucks (Template Engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})

// Inicio e configuração do Servidor
server
// Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// Rodas da aplicação
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
// start do Servidor
.listen(5500)