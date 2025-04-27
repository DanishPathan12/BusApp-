const express = require('express');
const app = express()
const path = require("path");
const port = 3001
const BodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser")
const db = require("./db");
const DriverRoute = require("./routes/DriverRoutes");
const UserRoute = require("./routes/UserRoutes");
const authMiddleware = require('./middlewares/authmiddleware');

app.use(express.json()); // This is required to parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // This is required to parse form data

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(BodyParser.json());
app.use(cookieParser());
app.use('/driver', DriverRoute);
app.use('/user', UserRoute);




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})