const express = require("express");
const router = express.Router();
const user = require("../models/Driver");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = "chintapkdumdum"


router.post('/signup', async (req, res) => {

    const { name, license, busNumber, password } = req.body;
    if (!name || !license || !busNumber || !password) {
        return res.status(400).json({ msg: "Please fill all fields" });
    }
    const saltRound = 10;
    const hashedpw = await bcrypt.hash(password, saltRound);
    try {
        await user.create({
            name,
            license,
            busNumber,
            password: hashedpw,

        });
        res.status(200).json({ msg: "user created" });

    } catch (error) {
        console.log(error);

    }
})



router.post('/login', async (req, res) => {
    const { license, password } = req.body;
    const USER = await user.findOne({ license });

    if (!USER) {
        return res.json({ msg: "username invalid" });
    }

    const isPasswordValid = await bcrypt.compare(password, USER.password);

    if (!isPasswordValid) {
        return res.json({ msg: "error" });
    }

    const payload = { license };
    const token = jwt.sign(payload, secretKey, { expiresIn: '1d' });

    // Set the cookie before sending the response
    res.cookie('token', token, { httpOnly: true });

    return res.status(200).json({ msg: "logged in" });
});






module.exports = router;