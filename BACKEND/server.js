const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();



//google authentication
const passport = require("passport");
const authRoute = require("./routes/auth");
const cookieSession = require("cookie-session");
const passportStrategy = require("./passport");

app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 24 * 60 * 60 * 100,
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

app.use("/auth", authRoute);
//


// Database Connection
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
})

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongodb connection success!");
})


// Middleware
app.use(cors());
app.use(express.json());



//http://localhost/vehicle/
app.use("/transportation",require("./routes/transport.js"));
app.use("/vehicle", require("./routes/vehicle.js"));
app.use("/product", require("./routes/products.js"));

const PORT= process.env.PORT || 8070 
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
})