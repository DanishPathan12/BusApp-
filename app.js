
const express = require('express');
const app = express()
const path=require("path");
const port = 3001
const BodyParser = require("body-parser");

const cookieParser=require("cookie-parser")
const db = require("./db");
const DriverRoute=require("./routes/DriverRoutes");
const UserRoute=require("./routes/UserRoutes")

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(BodyParser.json());
app.use(cookieParser());
app.use('/driver',DriverRoute);
app.use('/user',UserRoute);

app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})