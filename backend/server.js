import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.route.js";
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.listen(PORT, () => {
  connectDB();
  console.log(`Server start at port ${PORT}`);
});
console.log(process.env.MONGO_URI);
app.use("/products", productRoutes);
