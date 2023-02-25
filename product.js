const express=require('express');
const app=express();
const port=8000;
app.get('/product',(req,res)=>{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    const product=a * b;
    res.json({product});
})
app.listen(port,()=>{
    console.log(`listening on ${port}`);
})