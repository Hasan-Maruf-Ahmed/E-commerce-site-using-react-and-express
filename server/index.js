require("dotenv").config();

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const connection = require("./db");
const app = express();

const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const uploadRoute = require("./routes/upload");
const addProductsRoute = require("./routes/addProducts");

const port = process.env.PORT || 8080;

// Connect to database
connection();

// Image storage engine
const storage = multer.diskStorage({
  destination: "./images",
  filename: (req, file, cb) => {
    cb(
      null,
      `${(file.fieldname)}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware to inject the port into the request object
app.use((req, res, next) => {
  req.port = port;
  next();
});

// Serve static files from the 'images' directory
app.use("/images", express.static(path.join(__dirname,"images")));

app.use("/api/upload", upload.single("product_image"), uploadRoute);
app.use("/api/addproducts", addProductsRoute);

app.use("/api/signup", signupRoute);
app.use("/api/login", loginRoute);


app.listen(port, () => {
  console.log(`Listening on ${port}....`);
});
