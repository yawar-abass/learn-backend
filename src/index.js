import dotenv from "dotenv";
import connectDB from "./db/index.js";

// .env file config
dotenv.config({
  path: "./env",
});

// Db connection
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port: $${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDb connection failed !!!", err);
  });
