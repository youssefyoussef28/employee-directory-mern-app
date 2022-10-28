const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require(`./config/db`);
const PORT = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();
const app = express();

// app.get("/", (req, res) => {
//   res.status(201).json({ message: "Welcome" });
// });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
