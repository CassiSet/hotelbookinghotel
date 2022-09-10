import nc from 'next-connect';
import { CheckBooking } from '../../../controller/bookingController';
import dbConnect from '../../../config/dbConnect';

const hanlder = nc();

dbConnect();

hanlder.post(CheckBooking);

export default hanlder;
