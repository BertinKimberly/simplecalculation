// const express=require('express');
// const app=express();
// const port=3000;


// // app.get('/sum',(req,res)=>{
// //     const num1=parseInt(req.query.num1);
// //     const num2=parseInt(req.query.num2);
// //     const sum= num1 + num2;
// //     res.json({sum});
// // })

// app.get('/sum',(req,res)=>{
//     const num1=parseInt(req.query.num1);
//     const num2=parseInt(req.query.num2);
//     const sum=num1 + num2;
//     res.json({sum});
// })
// app.listen(port,()=>{
//     console.log(`Listening on ${port}`);
// })


//Using a function

const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const port=3000;
app.use(bodyParser.json());
function sum(a,b){
    return a + b;
}

app.get('/sum',(req,res)=>{
const {a,b}=req.body;
if(typeof a !=='number' || typeof b !=='number'){
    res.status(400).send('Invalid input');
}
const result=sum(a,b);
res.json({result : result});
});
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});