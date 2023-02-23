import express from 'express'
import db from "./db/database.js";
import claims from "./db/model/claims.model.js";
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
let app = express()
app.use(bodyParser.json())

var myDBCon = mongoose.connect(db, (err) => {
    if (err) console.log('Failed to connect Mongodb', err);
    else console.log(' MongoDB is connected with Claims');
})

app.get('/claims', (req, res) => {
    claims.find((err, data) => {
        if (err) res.send(err)
        res.send(data)
    })
})

app.post('/claims', (req,res)=>{
    console.log("Posted the claim");
})
app.listen('3000', () => {
    console.log('server is running');
})




