import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import { auth } from '../../../controller/userController';

const hanlder = nc();

dbConnect();

hanlder.post(auth);
