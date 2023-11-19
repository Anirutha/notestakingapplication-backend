const express = require("express");
var cors = require('cors')
const connectDB = require('./src/db/mongoose');

const noteRouter = require("./src/routers/note-routers");
const userRouter = require("./src/routers/user-routers");

const app = express();
app.use(cors())

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "*");
    res.set("Access-Control-Allow-Methods", "*");
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }
    next();
});

app.use(express.json());
app.use(noteRouter);
app.use(userRouter);

connectDB();


const port = 7000;

app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});