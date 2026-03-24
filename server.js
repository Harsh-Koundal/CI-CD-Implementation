import express, { json } from "express";

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({message:"Server Running"});
})

const port = 5020
app.listen(port,()=>{
    console.log(`server listning on port ${port}`);
});
