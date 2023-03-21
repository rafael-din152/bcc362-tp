const knex = require('knex')

const connectedKnex = knex({
    client: "mysql",
    connection: {
        host: "10.5.0.5",
        port: 3306,
        user: "user",
        password: "password",
        database: "tp5"
    }
})

module.exports = connectedKnex