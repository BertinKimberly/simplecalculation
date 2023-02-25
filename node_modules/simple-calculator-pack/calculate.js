const express=require('express');
const bodyParser=require('body-parser');
const port=3000;
const app=express();

app.use(bodyParser.json());



app.get('/calculate',(req,res)=>{
    const {num1,num2,op}=req.body;
    if(typeof num1 !=='number' ||typeof num2 !=='number'){
        res.status(400).send('Invalid input');
    }
    let result;
    switch(op){
        case 'add':
            result=num1 + num2;
            break;
        case 'subtract':
            result=num1 - num2;
            break;
            
        case 'divide':
            result=num1 / num2;
            break;
                
        case 'multiply':
            result=num1 * num2;
            break;
        default:
          return  res.status(400).send('Invalid operator');
    }

    res.send({result:result});
});
app.listen(port,()=>{
    console.log(`The server is listening on port ${port}`)
});