const Appointment = require("../models/Appointment");

exports.createAppointment = async (req, res) => {
  const { doctorType, date, time, comments } = req.body;

  const appointment = await Appointment.create({
    user: req.user._id,
    doctorType,
    date,
    time,
    comments,
    report: req.file?.path,
  });

  res.status(201).json(appointment);
};

exports.getMyAppointments = async (req, res) => {
  const year = req.query.year;

  let filter = { user: req.user._id };

  if (year) {
    filter.date = {
      $gte: new Date(`${year}-01-01`),
      $lte: new Date(`${year}-12-31`),
    };
  }

  const appointments = await Appointment.find(filter).sort({ createdAt: -1 });
  res.json(appointments);
};
