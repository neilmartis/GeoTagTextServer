const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(process.env.Database_URL);
  console.log(`Example app listening at http://localhost:${port}`)
})


// app.get('/times', (req, res) => res.send(showTimes()))

// showTimes = () => {
//     let result = '';
//     const times = process.env.TIMES || 5;
//     for (i = 0; i < times; i++) {
//       result += i + ' ';
//     }
//     return result;
//   }
  
