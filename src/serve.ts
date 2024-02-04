import express from "express"
import { routeMain } from "./routes"
import "dotenv/config"
import { setupMongo } from "./database"

setupMongo().then(()=>{
    const app = express()
    const PORT = 3001
    app.use(express.json())
    app.use(routeMain)
    app.listen(PORT,()=>{
        console.log(`App is running at http://localhost:${PORT}`);
        
    })
})
