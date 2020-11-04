const Tour = require('../models/Tour');

module.exports.checkBody = (req, res, next) => {
  if (req.body.name && req.body.price) {
    next();
  } else {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid Request Body',
    });
  }
};

module.exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    // results: tours.length,
    // data: {
    //   tours,
    // },
  });
};

module.exports.getTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '',
    },
  });
};

module.exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'success',
    data: {
      tour: '',
    },
  });
};

module.exports.updateTour = (req, res) => {
  res.status(201).json({
    status: 'success',
    data: {
      tour: '',
    },
  });
};

module.exports.deleteTour = (req, res) => {
  res.status(204).send('DELETE TOUR');
};
