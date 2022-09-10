import nc from 'next-connect';
import { register } from '../../../controller/userController';
import dbConnect from '../../../config/dbConnect';

const hanlder = nc();

dbConnect();

hanlder.post(register);

export default hanlder;
