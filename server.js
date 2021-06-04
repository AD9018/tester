const express = require('express');
const helmet = require('helmet')
const cors = require('cors');

// const UsersRouter = require('./api/users/users-router')


const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())


// server.use("/api/users",UsersRouter)

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({ 
        message:err.message,
        status:err.stack,
    })
})

module.exports = server