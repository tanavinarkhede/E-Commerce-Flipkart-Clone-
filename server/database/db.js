
import mongoose from "mongoose";

export const Connection = async(username, password) => {
    const URL = `mongodb://${username}:${password}@ac-b2b5d2t-shard-00-00.ufi7obd.mongodb.net:27017,ac-b2b5d2t-shard-00-01.ufi7obd.mongodb.net:27017,ac-b2b5d2t-shard-00-02.ufi7obd.mongodb.net:27017/?ssl=true&replicaSet=atlas-9pnprb-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ecommerce-web`;
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log(`Database connect successfully`);
    }catch (error) {
        console.log(`Error while connecting with the database`, error.message);
    }
}

export default Connection;

//mongodb://user:user@21@ac-b2b5d2t-shard-00-00.ufi7obd.mongodb.net:27017,ac-b2b5d2t-shard-00-01.ufi7obd.mongodb.net:27017,ac-b2b5d2t-shard-00-02.ufi7obd.mongodb.net:27017/?ssl=true&replicaSet=atlas-9pnprb-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ecommerce-web