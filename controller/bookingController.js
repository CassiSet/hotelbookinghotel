import Booking from '../models/booking';
import User from '../models/user';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

const AllBooking = async (req, res) => {
  // var query = {
  //   'name': {
  //     $regex: req.body.title,
  //     $options: 'i'
  //   }
  // };
  const pageSize = 6;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? {
        roomname: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const innerQuery = {
    path: 'user',
    select: 'name',
  };

  try {
    const count = await Booking.countDocuments({ ...keyword });
    const booking = await Booking.find({ ...keyword })
      .populate(innerQuery)
      .limit(pageSize)
      .skip(pageSize * (page - 1));
    res.status(200).json({
      booking,
      page,
      pages: Math.ceil(count / pageSize),
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const createBooking = async (req, res) => {
  const {
    user,
    room,
    roomname,
    checkInDate,
    checkOutDate,
    amoutPaid,
    dateOfStays,
    paiemntInfo,
    paidAt,
    createdAt,
  } = req.body;

  try {
    const booking = new Booking({
      user: req.user.id,
      room,
      roomname,
      checkInDate,
      checkOutDate,
      amoutPaid,
      dateOfStays,
      paiemntInfo,
      paidAt,
      createdAt,
    });

    const saveBooking = await booking.save();
    if (saveBooking) {
      res.status(200).json({
        success: true,
        message: 'chambre creer avec success',
        saveBooking,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const CheckBooking = async (req, res) => {
  let { roomId, checkInDate, checkOutDate } = req.query;

  checkInDate = new Date(checkInDate);
  checkOutDate = new Date(checkOutDate);

  try {
    const bookings = await Booking.find({
      room: roomId,
      $and: [
        {
          checkInDate: {
            $lte: checkOutDate,
          },
          checkOutDate: {
            $gte: checkInDate,
          },
        },
      ],
    });

    let isAvalable;

    if (bookings && bookings.length === 0) {
      isAvalable = true;
    } else {
      isAvalable = false;
    }
    res.status(200).json({
      success: true,
      isAvalable,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const bookingDays = async (req, res) => {
  const { roomId } = req.query;

  try {
    const bookings = await Booking.find({ room: roomId });
    let bookingDays = [];

    const timeDifference = moment().utcOffset() / 60;
    bookings.forEach((booking) => {
      const checkInDate = moment(booking.checkInDate).add(
        timeDifference,
        'hours'
      );
      const checkOutDate = moment(booking.checkOutDate).add(
        timeDifference,
        'hours'
      );
      const range = moment.range(moment(checkInDate), moment(checkOutDate));
      const days = Array.from(range.by('day'));
      bookingDays = bookingDays.concat(days);
    });
    res.status(200).json({
      success: true,
      bookingDays,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const MyBooking = async (req, res) => {
  try {
    const booking = await Booking.find({ user: req.user.id });
    res.status(200).json({
      booking,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const monthgStat = async (req, res) => {
  try {
    const month = Number(req.query.month);
    const year = Number(req.query.year);
    const date = req.query.date;

    const monthstats = await Booking.aggregate([
      {
        $match: {
          checkInDate: {
            $gte: new Date(`${year}-${month}-01`),
            $lte: new Date(`${year}-${month}-31`),
          },
        },
      },
      {
        $group: {
          _id: { $month: new Date(`${year}-${month}-01`) },
          amoutTotal: {
            $sum: '$amoutPaid',
          },
          totalBoking: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          totalBoking: -1,
        },
      },
    ]);

    res.status(200).json({
      success: true,
      monthstats,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const daysStat = async (req, res) => {
  try {
    const dmonth =
      req.query.dmonth < 10 ? `0${req.query.dmonth}` : +req.query.dmonth;

    const dyear = Number(req.query.dyear);
    const day = req.query.day < 10 ? `0${req.query.day}` : +req.query.day;

    const stats = await Booking.aggregate([
      {
        $match: {
          checkInDate: {
            $eq: new Date(`${dyear}-${dmonth}-${day}`),
          },
        },
      },
      {
        $group: {
          _id: {
            $dayOfMonth: new Date(
              `${dyear}-${dmonth}-${day}T00:00:00.000+00:00`
            ),
          },
          amoutTotal: {
            $sum: '$amoutPaid',
          },
          totalBoking: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          moutTotal: -1,
        },
      },
    ]);

    const curr = new Date();
    const first = curr.getDate() + 1 - curr.getDay();
    const last = first + 6;
    console.log();

    const firstday = new Date(curr.setDate(first));
    const lastday = new Date(curr.setDate(last));

    const mondAy =
      firstday.getDate() < 10 ? `0${firstday.getDate()}` : +firstday.getDate();

    const monYear =
      firstday.getFullYear() < 10
        ? `0${firstday.getFullYear}`
        : +firstday.getFullYear();

    const monMonth =
      firstday.getMonth() < 10
        ? `0${firstday.getMonth() + 1}`
        : +firstday.getMonth() + 1;

    const sundAy =
      lastday.getDate() < 10 ? `0${lastday.getDate()}` : +lastday.getDate();

    const sunYear =
      lastday.getFullYear() < 10
        ? `0${lastday.getFullYear}`
        : +lastday.getFullYear();

    const sunMonth =
      lastday.getMonth() < 10
        ? `0${lastday.getMonth() + 1}`
        : +lastday.getMonth() + 1;

    const weekstats = await Booking.aggregate([
      {
        $match: {
          checkInDate: {
            $gte: new Date(`${monYear}-${monMonth}-${mondAy}`),
            $lte: new Date(`${sunYear}-${sunMonth}-${sundAy}`),
          },
        },
      },
      {
        $group: {
          _id: {
            $week: new Date(`${monYear}-${monMonth}-${mondAy}`),
          },
          amoutTotal: {
            $sum: '$amoutPaid',
          },
          totalBoking: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          moutTotal: -1,
        },
      },
    ]);

    res.status(200).json({
      success: true,
      stats,
      weekstats,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export {
  MyBooking,
  createBooking,
  AllBooking,
  CheckBooking,
  bookingDays,
  monthgStat,
  daysStat,
};
