require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 3001;

app.get("/",(req,res)=>{
    res.send("Show Hone wala Line");
})

app.get("/signup",(req,res)=>{
    res.send("<h1><center>Sign Up</center></h1>");
})

app.get("/login",(req,res)=>{
    res.send("<br><br><h2><center>Login</center></h2>");
})


app.listen(process.env.PORT,()=>{
    console.log(`listing on port ${PORT}`);
    console.log(`http://localhost:4000`);
})