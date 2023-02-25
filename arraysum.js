const express=require('express');
const app=express();
const port=8000;
app.use(express.json());

app.post('/sum',(req,res)=>{
    const {numbers}=req.body;
    if(!Array.isArray(numbers)){
        return res.status(400).json({error:'The requested body must contain an array of numbers'});
    }
    const sum=numbers.reduce((curr,acc)=>{
        return acc + curr;
    },0);
    res.json({sum});
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})