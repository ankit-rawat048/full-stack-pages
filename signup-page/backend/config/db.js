const mongoose = require("mongoose");

const connectDB =  async () =>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/signupDB",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("mongoDB connected...");
    } catch(error) {
        console.error("mongoDB connection error:", error);
    }
};

module.exports = connectDB;