const mongoose = require("mongoose");

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb+srv://aniruthasivakumar03:Mahathi03@cluster0.yqqe4fw.mongodb.net/?retryWrites=true&w=majority/noter`, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
      });
      console.log(`MongoDB Connected`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
  module.exports = connectDB;
