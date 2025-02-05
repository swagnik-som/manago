

// require("./config/instrument.js");
// const Sentry = require("@sentry/node");
const express=require("express")
const dotenv=require('dotenv')
const cors=require('cors')
const connectDB = require("./config/db.js");
const clerkhooks = require("./controllers/webhooks.js");
const app=express()
  connectDB()
app.use(cors())
app.use(express.json())
// app.get("/debug-sentry", function mainHandler(req, res) {
//     throw new Error("My first Sentry error!");
//   });

  app.post('/webhooks',clerkhooks)
// Sentry.setupExpressErrorHandler(app);
const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})