const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const port =  process.env.PORT || 8800;
const Authroute = require('./routes/auth');
const userRoute = require('./routes/user');
const productRoute = require('./routes/products');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');


dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/api/auth", Authroute);
app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart" , cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


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