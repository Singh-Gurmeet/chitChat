require('dotenv').config();


const app = require('express')();

const http=require('http').Server(app);
const port =3000;

var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/real-chat-app');




http.listen(port, ()=>{
    console.log(`server is running at port ${port}`);
})

