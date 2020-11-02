const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
});

app.get('/api/v1/tours/:id', (req, res) => {
  const { id } = req.params;

  if (id > tours.length) {
    return res.status(404).res.json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  const tour = tours.find((el) => el.id === Number(id));

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
  //   console.log(req.body);
  const newID = tours[tours.length - 1].id + 1;
  const newTour = {
    ...req.body,
    id: newID,
  };
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      if (!err)
        res.status(201).json({
          status: 'success',
          data: {
            tour: newTour,
          },
        });
    }
  );
});


app.patch('/api/v1/tours', (req, res) => {
    //   console.log(req.body);
    const newID = tours[tours.length - 1].id + 1;
    const newTour = {
      ...req.body,
      id: newID,
    };
    tours.push(newTour);
    fs.writeFile(
      `${__dirname}/dev-data/data/tours-simple.json`,
      JSON.stringify(tours),
      (err) => {
        if (!err)
          res.status(201).json({
            status: 'success',
            data: {
              tour: newTour,
            },
          });
      }
    );
  });
  
app.listen(port, () => {
  console.log('SERVER RUNNING');
});
