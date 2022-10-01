const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const path = require("path");
const url = "https://zen-e-zenzero-fullstack.onrender.com"

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  })
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "/images")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post(url +"/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
//endpoints
app.use(url +"/api/auth", authRoute);
app.use(url +"/api/users", userRoute);
app.use(url+"/api/posts", postRoute);
app.use(url+"/api/categories", categoryRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static("client/build"));
}


app.listen(process.env.PORT || 5000, () => {
  console.log("Listening at port 5000");
});


