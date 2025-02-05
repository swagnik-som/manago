const { request } = require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config({
    path:".env"
})
const connectDB=async()=>{
mongoose.connection.on('connected',()=>console.log('Database connected...'))
await mongoose.connect(process.env.Mongo_URL)
}
module.exports=connectDB;