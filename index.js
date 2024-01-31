import express from "express";
import {connectDb} from './config/db.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3001;

connectDb().then(()=>{
        app.listen(port, () => {
            console.log(`✅ API Server live on port:`,port);
        });
    }).catch(e=>{
        console.log(e)
    })
