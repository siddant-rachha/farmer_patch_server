const express = require("express")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")

dotenv.config();
//route imports
const intialRegisterRoute = require('./routes/intialregister.js')
const finalRegisterRoute =  require("./routes/finalregister.js")
const otp = require('./routes/otp.js')



const app = express();

app.use(cors());

const jsonParser = bodyParser.json({limit: "50mb"});
app.use(jsonParser)

app.use("/test",(req,res)=>{return res.send("test")})
app.use("/initialregister", intialRegisterRoute);
app.use("/finalregister", finalRegisterRoute);
app.use("/otp", otp);




//server listen
app.listen( process.env.PORT || 5000, ()=>{
    console.log(`server is running on port: ${process.env.PORT || 5000}`)
})



//mongodb connect
async function main() {
    await mongoose.connect(process.env.MONGODB_STRING);
    console.log("mongo connection successfull")
}
main().catch(err => console.log(err));