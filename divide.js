const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const port=8000;

app.use(bodyParser.json());

function divide(a,b){
    return a/b;
};

app.post('/divide',(req,res)=>{
    const {a,b}=req.body;
    if(typeof a !=='number' || typeof b !=='number'){
        res.status(400).send('Invalid input');
    }
    const quotient=divide(a,b);
    res.json({quotient : quotient});
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})