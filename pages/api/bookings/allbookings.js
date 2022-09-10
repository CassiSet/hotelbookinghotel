import nc from 'next-connect';
import { AllBooking } from '../../../controller/bookingController';
import dbConnect from '../../../config/dbConnect';

const hanlder = nc();

dbConnect();

hanlder.get(AllBooking);

export default hanlder;
