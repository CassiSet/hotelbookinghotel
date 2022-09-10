import nc from 'next-connect';
import {
  getRoomById,
  getRoomAndDelette,
  getRoomAndUpdate,
} from '../../../controller/roomController';
import dbConnect from '../../../config/dbConnect';

const hanlder = nc();

dbConnect();

hanlder.get(getRoomById).put(getRoomAndUpdate).delete(getRoomAndDelette);

export default hanlder;
