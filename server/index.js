require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connection = require("./db");
const app = express();

const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");

//Connect to database
connection();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use("/api/signup", signupRoute);
app.use("/api/login", loginRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on ${port}....`);
});
