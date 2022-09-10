import nc from 'next-connect';
import { daysStat } from '../../../controller/bookingController';
import dbConnect from '../../../config/dbConnect';

const hanlder = nc();

dbConnect();

hanlder.get(daysStat);

export default hanlder;
