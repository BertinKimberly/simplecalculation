const express=require('express');
const app=express();
const port=8000;
app.use(express.json());
app.post('/sum',(req,res)=>{
    const {numbers}=req.body;
    if(!Array.isArray(numbers)){
        return res.status(404).json({error: 'the body request must contain array of numbers'});
    }
    const sum=numbers.reduce((acc,curr)=>{
        return acc + curr;
    },0);
    res.json({sum});
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

module.exports=app;