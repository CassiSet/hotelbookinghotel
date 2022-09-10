import nc from 'next-connect';
import { monthgStat } from '../../../controller/bookingController';
import dbConnect from '../../../config/dbConnect';

const hanlder = nc();

dbConnect();

hanlder.get(monthgStat);

export default hanlder;
