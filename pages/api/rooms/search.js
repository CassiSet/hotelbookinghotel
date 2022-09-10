import nc from 'next-connect';
import { SearchRoom } from '../../../controller/roomController';
import dbConnect from '../../../config/dbConnect';

const hanlder = nc();

dbConnect();

hanlder.get(SearchRoom);

export default hanlder;
