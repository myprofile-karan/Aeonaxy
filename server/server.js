require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./utils/dbConfig.js");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: "https://aeonaxy-site.netlify.app",
}));
app.use(express.json());

connect()


// routes import
const userRouter = require("./routes/user.routes.js");


//routes
app.use("/api", userRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
