import dotenv from "dotenv";
import express from "express";
import path from "path";
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.route.js";
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use("/api/products", productRoutes);

const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}
app.listen(PORT, () => {
  connectDB();
  console.log(`Server start at port ${PORT}`);
});
console.log(process.env.MONGO_URI);
