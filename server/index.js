const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 3000;

app.use(cors());

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("audio"), (req, res) => {
  console.log(req.file);
  res.json({ message: "File uploaded successfully" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
