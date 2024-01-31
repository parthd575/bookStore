import express from "express";
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`✅ API Server live on port:`,port);
});