import express from "express";
import cors from "cors";
import "dotenv/config";
import {
  ADMIN_URL,
  FRONTEND_URL,
  PORT,
} from "./common/constants/environment.js";
import asideLinksRoute from "./routes/asideLinks.js";
import pricesRoute from "./routes/prices.js";
import uploadRoute from "./routes/upload.js";
import galleryRoute from "./routes/gallery.js";
import linksRoute from "./routes/links.js";
import managementRoute from "./routes/management.js";
import homeRoute from "./routes/home.js";
import postsRoute from "./routes/posts.js";

const app = express();

app.use(
  cors({
    origin: [FRONTEND_URL, ADMIN_URL], // Specifies which domains are allowed
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type"], // Allowed headers
    credentials: true, // If you want to send credentials (e.g., cookies)
  })
);

app.use(express.static("public"));

app.use(express.json());

app.use("/api/asideLinks", asideLinksRoute);
app.use("/api/prices", pricesRoute);
app.use("/api/upload", uploadRoute);
app.use("/api/gallery", galleryRoute);
app.use("/api/links", linksRoute);
app.use("/api/management", managementRoute);
app.use("/api/home", homeRoute);
app.use("/api/post/", postsRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
