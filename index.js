const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const expRoute = require("./routes/exp");
const router = express.Router();
const path = require("path");
const cors = require("cors");

const paymentRoute = require("./routes/payment");
dotenv.config();

app.use("/images", express.static(path.join(__dirname, "public/images")));
//app.use(express.static("public"));
//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());
app.get("/", (req, res) => {
  res.send("Its running");
});
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/exp", expRoute);
app.use(express.json({ extended: false }));
app.use("/payment", paymentRoute);



const PORT = process.env.PORT || 5000;

mongoose
  .connect("mongodb+srv://:@cluster0.r6y69.mongodb.net/practiseDB", { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
