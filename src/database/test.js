const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
  // Inserir dados

  proffyValue = {
    name: "Leonardo Miranda",
    avatar: "https://avatars0.githubusercontent.com/u/62682298?s=460&u=aceca9a0450bd2ecb63634ea020327b99524c103&v=4",
    whatsapp: "199981273843",
    bio: "Entusiasta Saleforce. Apaixonado por Desenvolvimento, Tecnologia, Inovação e Marketing.",
  }

  classValue = {
    subject: 1,
    cost: "80",
   // O proffy id virá pelo banco de dados.
  }

  classScheduleValues = [
    // class_id virá pelo banco de dados, após cadastrarmos a class
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]

  // await createProffy(db, {proffyValue, classValue, classScheduleValues})

  // Consultar os dados inseridos

  // Todos os proffys
  const selectedProffys = await db.all("SELECT * FROM proffys")
  //console.log(selectedProffys)
 
  // Consultar as classes de um determinado professor
  // e trazer junto os dados do professor
  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1
  `)
  
  //console.log(selectClassesAndProffys)

  // O horário que a pessoa trabalha, por exemplo, é das 8h - 18h
  // o horário do time_from(8h) precisa ser antes ou igual ao horário solicitados
  // o time_to precisa ser acima
  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = 1
    AND class_schedule.weekday = "1"
    AND class_schedule.time_from <="48000"
    AND class_schedule.time_to > "520"
  `)

  //console.log(selectClassesSchedules)

})