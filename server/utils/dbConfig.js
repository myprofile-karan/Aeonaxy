const mongoose = require("mongoose")

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongodb is connected");
    } catch (error) {
        console.log("ERROR: ", error);
        throw new error;
    }
}
module.exports = connect;