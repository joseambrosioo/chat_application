import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth-routes.js";
import messageRoutes from "./routes/message-routes.js";
// import conversationRoutes from "./routes/conversation-routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// using middleware
app.use(express.json()); // to parse incoming request with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
// app.use("/api/conversation", conversationRoutes);

// app.get("/", (req, res) => {
//   // root route http://localhost:5000/
//   res.send("Hello World");
// });

// app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
