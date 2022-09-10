import nc from 'next-connect';
import { AllRoom, createRoom } from '../../../controller/roomController';
import dbConnect from '../../../config/dbConnect';
import { isUserAuth } from '../../../midleware/auth';

const hanlder = nc();

dbConnect();

hanlder.get(AllRoom).use(isUserAuth).post(createRoom);

export default hanlder;
