import nc from 'next-connect';
import { MyBooking } from '../../../controller/bookingController';
import dbConnect from '../../../config/dbConnect';
import { isUserAuth } from '../../../midleware/auth';

const hanlder = nc();

dbConnect();

hanlder.use(isUserAuth).get(MyBooking);

export default hanlder;
