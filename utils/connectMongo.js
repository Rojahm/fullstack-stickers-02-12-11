const mongoose = require("mongoose");

async function connectMongo() {
  const connection = await mongoose.connect(`${process.env.DATABASE_URL}`);
  return connection;
}

export default connectMongo;
