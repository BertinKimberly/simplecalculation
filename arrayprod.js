// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;

// // Use middleware to parse JSON request body
// app.use(bodyParser.json());

// app.post('/product', (req, res) => {
//   const numbers = req.body.numbers;
//   const product = numbers.reduce((acc, val) => acc * val);
//   res.json({ result: product });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });



const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const port = 3000;

app.use(bodyParser.json());

app.post('/product',(req,res)=>{
    const numbers=req.body.numbers;
    const product=numbers.reduce((acc,val)=> acc * val);
    res.json({result: product});
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})



