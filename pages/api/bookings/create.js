import nc from 'next-connect';
import { createBooking } from '../../../controller/bookingController';
import dbConnect from '../../../config/dbConnect';
import { isUserAuth } from '../../../midleware/auth';

const hanlder = nc();

dbConnect();

hanlder.use(isUserAuth).post(createBooking);

export default hanlder;
