const express = require('express');
const helmet = require('helmet')
const cors = require('cors');
const path = require('path')
// const UsersRouter = require('./api/users/users-router')




const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())
server.use(express.static(path.join(__dirname, '../front-end/build')))


// server.use("/api/users",UsersRouter)

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({ 
        message:err.message,
        status:err.stack,
    })
})

module.exports = server