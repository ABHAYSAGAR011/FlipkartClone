import mongoose from "mongoose";

export const Connection = async (UserName,Password)=>{
    const URL = `mongodb+srv://${UserName}:${Password}@flipkartdatabase.4i9ztz8.mongodb.net/?retryWrites=true&w=majority`
    
    try{
        await mongoose.connect(URL,{useNewUrlParser:true,
            useUnifiedTopology:true
            })
            console.log("Database Connected")
        
    }catch(error){
        console.log('Error while connecting with the database' , error.message)
    }
} 

export default Connection;