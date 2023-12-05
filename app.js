const express = require('express')

//importando el router
const router = require('./routes/main')

const app = express()

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