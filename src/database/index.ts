import mongoose from "mongoose";

export async function setupMongo():Promise<void>{
    try {
        if(mongoose.connection.readyState === 1){
            return;
        }

        console.log('Connecting to DB');
        
        await mongoose.connect(process.env.URL_MONGO as string)
        console.log("DB connected");
        
        
    } catch {
        throw new Error("Not connected")
    }
}