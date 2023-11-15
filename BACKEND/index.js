const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const videoRouter = require("./ROUTES/videoRouter");
const authRouter = require("./ROUTES/authRouter.js");
// Create an instance of Express
const app = express();
app.use(express.json());
app.use(cors());

// Step 1: Connect to MongoDB
const DBURL =
  "mongodb+srv://youtubeclone:1234@cluster0.5ofd4si.mongodb.net/youtubeclone_210240101048";
mongoose
  .connect(DBURL)
  .then(() => {
    console.log("Database Connected", DBURL);
  })
  .catch((error) => {
    console.log("Cannot connect to DB ", error);
  });

// Route example
app.get("/", (req, res) => {
  res.send("HEllo server this is  in Express");
});

//  Additional Router
app.use(videoRouter);
app.use(authRouter);

//  TOPIC - Adding more routes

// app.get("/videos", (req, res) => {
//   return res.send([{ id: "1", link: "Some video link" }]);
// });

//  TOPIC - WORKING WITH POST REQUESTS

// app.post("/video", function (req, res) {
//   console.log(req.body);
//   return res.send({ body: req.body, response: "Success" });
// });

//  TOPIC - working with request Parameters

const port = 5500;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
