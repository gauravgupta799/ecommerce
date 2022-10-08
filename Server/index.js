const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port =  process.env.PORT || 8800;
const Authroute = require('./routes/auth');
const userRoute = require('./routes/user');

dotenv.config();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Welcome")
})
app.use("/api/auth", Authroute);
app.use("/api/user", userRoute);







mongoose.connect(process.env.MONGOURL, {useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('Database connection successful');
}).catch(err => {
    console.log(err);
});


app.listen(port, (err, res) => {
    if (err) throw err;
    console.log(`Listening on port ${port}`);
});