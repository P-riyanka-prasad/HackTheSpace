require('dotenv').config();

const express=require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const Pusher = require('pusher');


mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true, useFindAndModify: false }).then(()=>{
    console.log("DB connected");
});


const app=express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});
app.use(express.json());
app.use(cookieParser());
let pusher = new Pusher({
    appId : "1189699",
key : "29dcafd5a15ea6fb0fe3",
secret : "d6de020f76c01ca4dcfa",
cluster : "ap2",
    encrypted: true
});

const authRoutes=require("./routes/auth");
const router = require('./routes/auth');
app.post('/pusher/auth', (req, res) => {
    let socketId = req.body.socket_id;
    let channel = req.body.channel_name;
    random_string = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    let presenceData = {
        user_id: random_string,
        user_info: {
            username: '@' + random_string,
        }
    };
    let auth = pusher.authenticate(socketId, channel, presenceData);
    res.send(auth);
});

app.post('/update-location', (req, res) => {
    // trigger a new post event via pusher
    pusher.trigger('presence-channel', 'location-update', {
        'username': req.body.username,
        'location': req.body.location
    })
    res.json({ 'status': 200 });
});

app.use("/api",authRoutes);

const port=process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`App running on port ${port}`);
});