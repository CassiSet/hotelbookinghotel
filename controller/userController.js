import { hashPassword } from '../auth';
import User from '../models/user';

const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(400).json({
        success: false,
        message: 'Utilisateur deja enregister',
      });
    } else {
      const passhash = await hashPassword(password);
      const user = new User({
        name,
        email,
        password: passhash,
      });

      const saveUser = await user.save();

      res.status(200).json({
        _id: saveUser._id,
        nom: saveUser.nom,
        email: saveUser.email,
        isAdmin: saveUser.isAdmin,
        //   token: generateToken(user._id),
      });
    }

    console.log(saveUser);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const auth = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.findOne(email);
    res.status(201).json({
      _id: user._id,
      nom: user.nom,
      email: user.email,
      isAdmin: user.isAdmin,
      //   token: generateToken(user._id),
    });
  } catch (error) {}
};

const updateUserProfile = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const passhash = await hashPassword(password);
    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: {
          name,
          email,
          password: passhash,
        },
      },
      {
        new: true,
      }
    );

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { register, auth, updateUserProfile };
