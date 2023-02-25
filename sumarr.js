// const express = require('express');
// const app = express();
// const port = 5000;

// app.use(express.json());

// app.post('/sum', (req, res) => {
//   const { numbers } = req.body;

//   if (!Array.isArray(numbers)) {
//     return res.status(400).json({ error: 'The request body must contain an array of numbers.' });
//   }

//   const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 0);

//   res.json({ sum });
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

const express=require('express');
const app=express();
const port=3000;
app.use(express.json);

app.post('/sum',(req,res)=>{
  const {numbers}=req.body;
  if(!Array.isArray(numbers)){
    return res.status(400).json({error:'The request body must contain an array of numbers.'});
  }
  const sum=numbers.reduce((acc,curr)=>{
    return acc + curr;
  },0);
  res.json({sum});
});

app.listen(port,()=>{
  console.log(`Listening on port ${port}`);
});
