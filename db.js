//실제 Mongo DB 연결
import mongoose from "mongoose";


mongoose.connect("mongodb://127.0.0.1:27017/ourtube", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log("❤ Connected to DB");
const handleError = (error) => console.log("✔ Error on DB Connection: ${error}");

db.once("open", handleOpen);
db.on("error", handleError);