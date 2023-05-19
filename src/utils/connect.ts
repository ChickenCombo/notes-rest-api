import mongoose from "mongoose";
import config from "config";

const connect = async () => {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    console.log("Connected to MongoDB");
  } catch (error: unknown) {
    console.error("Could not connect to MongoDB ", error);
    process.exit(1);
  }
};

export default connect;
