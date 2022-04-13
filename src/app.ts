import express from 'express';
import connect from './helpers/db_mongo/connect';

const app = express();


app.listen(3000, ()=>{console.log("message")});

connect()