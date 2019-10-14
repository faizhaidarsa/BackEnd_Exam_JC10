let express = require('express')
let cors = require('cors')
let bodyparser = require('body-parser')
let app = express()
const port = 9000
const {movieRouter,categoryRouter,connectionRouter} = require('./router')

app.use(bodyparser.json())
app.use(cors())
app.use('/movie',movieRouter)
app.use('/category',categoryRouter)
app.use('/connection',connectionRouter)

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Purwadhika Movie API</h1>")
})

app.listen(port,console.log("Listening in "+port))