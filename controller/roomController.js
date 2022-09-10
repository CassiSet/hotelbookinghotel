import Room from '../models/room';
import Booking from '../models/booking';

const AllRoom = async (req, res) => {
  try {
    const room = await Room.find({});
    res.status(200).json({
      room,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const createRoom = async (req, res) => {
  const {
    user,
    name,
    price,
    description,
    capacityGuess,
    internet,
    animauxAutorise,
    category,
    roomSize,
    image,
  } = req.body;

  try {
    const room = new Room({
      user: req.user.id,
      name,
      price,
      description,
      capacityGuess,
      internet,
      animauxAutorise,
      category,
      roomSize,
      image,
    });

    const saveRoom = await room.save();
    if (saveRoom) {
      res.status(200).json({
        success: true,
        message: 'chambre creer avec success',
        saveRoom,
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

const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);
    if (!room) {
      res.status(404).json({
        success: false,
        error: 'Aucune chambre trouvé',
      });
    }
    res.status(201).json({
      room,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getRoomAndDelette = async (req, res) => {
  try {
    const room = new Room.findByIdAndDelete(req.query.id);
    if (!room) {
      res.status(404).json({
        success: false,
        error: 'Aucune chambre trouvé',
      });
    }

    res.status(200).json({
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const getRoomAndUpdate = async (req, res) => {
  try {
    const verifyroom = new Room.findById(req.query.id);
    if (!verifyroom) {
      res.status(404).json({
        success: false,
        error: 'Aucune chambre trouvé',
      });
    }
    const room = new Room.findByIdAndUpdate(
      req.query.id,
      { user },
      { new: true }
    );
    res.status(200).json({
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const SearchRoom = async (req, res) => {
  let { checkInDate, checkOutDate } = req.query;

  checkInDate = new Date(checkInDate);
  checkOutDate = new Date(checkOutDate);
  try {
    const bookings = await Booking.find({
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

    const roomId = [];

    bookings.forEach((booking) => {
      roomId.push(booking.room);
    });
    // const idRoom = [...new Set(bookings.map((booking) => booking.room))];

    // const unique = (value, index, self) => {
    //   return self.indexOf(value) === index;
    // };

    // const uniqueAges = roomId.filter(unique);

    // console.log(uniqueAges);

    const room = await Room.find({ _id: { $nin: roomId } });
    res.status(200).json({
      success: true,
      room,
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
  createRoom,
  AllRoom,
  getRoomById,
  getRoomAndDelette,
  getRoomAndUpdate,
  SearchRoom,
};
