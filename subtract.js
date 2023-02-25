const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const port=3000;

app.use(bodyParser.json());

function subtract(a,b){
    return a-b;
}

app.post('/subtract',(req,res)=>{
    const {a,b}=req.body;
    if(typeof a!=='number'|| typeof b !=='number'){
        res.status(400).send('Invalid input');
    }
    const result=subtract(a,b);
    res.json({result: result });
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});


