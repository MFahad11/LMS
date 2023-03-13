const cloudinary = require("cloudinary").v2;
const path = require("path");
const multer = require("multer");


cloudinary.config({
  cloud_name: "dtxirhjul",
  api_key: "164976764714351",
  api_secret: "A3tpcECzWmJrdT2Qeyww0Mk0Yb4",
});
const imageMiddleWare = () => {
  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../../tmp"));
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "-" + Date.now());
    },
  });
  var upload = multer({ storage: storage , limits: { fileSize: 1024 * 1024 }});
  return upload;
};

const uploadToCloudinaryMiddleware = (req, res, next) => {
  const multerMiddleware = imageMiddleWare();

  multerMiddleware.single("image")(req, res, (err) => {
    if (err) {
      console.error("Failed to upload image:", err);
      res.status(500).json({ error: "Failed to upload image"});
      return;
    }

/*     if (!req.file) {
      next();
      return;
    }  */

    cloudinary.uploader.upload(req.file.path, (error, result) => {
      if (error) {
        console.error("Failed to upload image to Cloudinary:", error);
        res.status(500).json({ error: "Failed to upload image to Cloudinary" });
        return;
      }

      req.body.imageURL = result.secure_url
      const a = req.body.imageURL
     console.log(a);

      next();
    });
  });
};
module.exports = uploadToCloudinaryMiddleware