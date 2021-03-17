// Create express server
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const apiRoutes = require("./routes/api");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("tiny"));
app.use("/api", apiRoutes);
app.use(express.static("public"));
app.get("/api/workouts", (req, res) => {
    res.status(500)
});
app.get("/stats", async (req, res) => {
    res.sendFile(__dirname + "/public/stats.html")
});
app.get("/exercise", async (req, res) => {
    res.sendFile(__dirname + "/public/exercise.html")
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true, useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) =>
    console.log(`error in mongoose conneciton: ${err.message}`)
);

mongoose.connection.once("open", () => {
    console.log("mongoose connected!");
    app.listen(PORT, (err) => console.log(`http://localhost/${PORT}`));
});
