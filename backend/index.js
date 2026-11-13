const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
const hostname = 'localhost'
const conn = require('./db/conn')

const rel = require('./models/rel')
const agendamento = require('./controller/agendamento.controller')
const ciclista = require('./controller/ciclista.controller')
const bicicleta = require('./controller/bicicleta.controller')
const auth = require('./controller/auth.controller')

// Middlewares

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// Rotas públicas

app.post('/ciclista',ciclista.cadastrar)
app.post('/login',auth.login)

// Rotas privadas

app.get('/ciclistas',ciclista.listar)
app.get('/ciclista/:id',ciclista.consultar)
app.put('/ciclista/:id',ciclista.atualizar)
app.delete('/ciclista/:id',ciclista.apagar)

app.post('/bicicleta',bicicleta.cadastrar)

app.post('/agendamento',agendamento.cadastrar)
app.get('/agendamentos',agendamento.listar)

// sincronizando o servidor com o banco de dados

conn.sync()

    .then(()=>{
        app.listen(PORT, hostname, ()=>{
            console.log(`Servidor rodando em http://${hostname}:${PORT}`)
        })
    })

    .catch((err)=>{
        console.error('Erro ao sincronizar com o banco de dados',err)
    })
