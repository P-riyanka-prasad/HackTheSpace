const express = require("express")
const mongoose = require('mongoose');
const http = require("http")
const app = express()
const cors=require('cors');
app.use(cors());
const server = http.createServer(app)
const io = require("socket.io")(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: [ "GET", "POST" ]
	}
})

io.on("connection", (socket) => {
	socket.emit("me", socket.id)

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	})

	socket.on("callUser", (data) => {
		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
	})

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	})
})
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true, useFindAndModify: false }).then(()=>{
    console.log("DB connected");
});
const authRoutes=require("./routes/auth");


app.use("/api",authRoutes);

server.listen(5000, () => console.log("server is running on port 5000"))