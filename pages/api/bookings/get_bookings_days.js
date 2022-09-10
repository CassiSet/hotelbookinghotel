import nc from 'next-connect';
import { bookingDays } from '../../../controller/bookingController';
import dbConnect from '../../../config/dbConnect';

const hanlder = nc();

dbConnect();

hanlder.get(bookingDays);

export default hanlder;
