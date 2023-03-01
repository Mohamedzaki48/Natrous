const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
app.post('/api/v1/tours', (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTours = Object.assign({ id: newId }, req.body);
  tours.push(newTours);
  //fs.console.log(req.body);

  res.send('done');
});

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours,
    },
  });
});
app.listen(3000, () => {
  console.log('app is running now');
  console.log(`${__dirname}`);
});
