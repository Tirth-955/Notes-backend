import express from "express";
import notesRoutes from './routes/notes.route.js';
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import ratelimiter from "./middlewares/rateLimiter.middleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
// this middleware will parse JSON bodies; req.body
app.use(express.json());
app.use(ratelimiter);

// app.use((req, res, next) => {
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// })

app.use("/api/notes", notesRoutes);

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on PORT: ${PORT}.`);
        });
    });
