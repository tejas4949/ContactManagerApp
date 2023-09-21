const express=require("express");
const errorHandler = require("./routes/controller/middleware/errorHandler");
require("dotenv").config();




const app=express();


const port=process.env.port || 5000;

app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use(errorHandler);


app.listen(port,()=>{
    console.log(`namaskar pa huli ${port}`);
});