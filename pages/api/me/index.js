import nc from 'next-connect';
import { updateUserProfile } from '../../../controller/userController';
import dbConnect from '../../../config/dbConnect';
import { isUserAuth } from '../../../midleware/auth';

const hanlder = nc();

dbConnect();

hanlder.use(isUserAuth).put(updateUserProfile);

export default hanlder;
