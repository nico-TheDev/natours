const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

module.exports.checkID = (req, res, next, val) => {
  if (val > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};

module.exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
};

module.exports.getTour = (req, res) => {
  const { id } = req.params;

  const tour = tours.find((el) => el.id === Number(id));

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

module.exports.createTour = (req, res) => {
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
};

module.exports.updateTour = (req, res) => {
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
};

module.exports.deleteTour = (req, res) => {
  res.status(204).send('DELETE TOUR');
};
