import nc from 'next-connect';
import path from 'path';
import multer from 'multer';
export const config = {
  api: {
    bodyParser: false,
  },
};

const hanlder = nc();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/');
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images only');
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

let uploafile = upload.array('image', 6);

hanlder.use(uploafile);

hanlder.post((req, res) => {
  const files = req.files;
  let imgPaths = [];
  if (files) {
    files.map((f) => imgPaths.push(`/${f.path}`));
  }

  const file = imgPaths.map((e) => e);
  console.log(imgPaths);
  res.send(`${imgPaths}`);
});

export default hanlder;
