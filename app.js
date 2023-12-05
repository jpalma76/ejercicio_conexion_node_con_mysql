const express = require('express')
const pg = require('pg')

require("dotenv").config();

//importando el router
const router = require('./routes/main')

const app = express()
const pool = new pg.Pool({
    connectionString: 'process.env.DATBASE_URL'
})

app.set(express.urlencoded({ extended: false }));
app.set(express.json())

//Setting templpate engine
app.set("view engine","ejs");

app.use(express.static('public'))
app.use(express.static('data'))
app.use(express.static('views'))

app.use("/", router);

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})