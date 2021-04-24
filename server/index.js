const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const mysql = require('mysql')

const db = mysql.createPool({
    host: "localhost",
    user: "admin",
    password: "SuperSecretPassword!123",
    database: "emrx",

});

app.get('/',(req,res)=>{

});
app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.get("/api/get",(req,res)=>{
    const sqlSelect = "SELECT * FROM patient"
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    })

});
app.get("/api/find",(req,res)=>{
    const sqlSelect = "SELECT * FROM patient WHERE pid=pid"
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    })

});
app.post("/api/insert",(req,res)=>{
    const pid = req.body.pid
    const visit = req.body.visit
    const ind1 = req.body.ind1
    const ind2 = req.body.ind2
    const ind3 = req.body.ind3
    const ind4 = req.body.ind4
    const ind5 = req.body.ind5
    const ind6 = req.body.ind6
    const ind7 = req.body.ind7
    const ind8 = req.body.ind8
    const ind9 = req.body.ind9
    const ind10 = req.body.ind10


    const sqlInsert = "INSERT INTO patient (pid,visit,ind1,ind2,ind3,ind4,ind5,ind6,ind7,ind8,ind9,ind10) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)"
    db.query(sqlInsert,[pid,visit,ind1,ind2,ind3,ind4,ind5,ind6,ind7,ind8,ind9,ind10],(err,result)=>{
        console.log(result);
    })
});

app.listen(3001,()=>{
    console.log("Testing");
})