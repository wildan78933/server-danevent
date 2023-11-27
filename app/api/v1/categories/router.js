const express = require("express");
const req = require("express/lib/request");
const router = express();

router.get("/categories", (req, res) => {
  res.status(200).json({
    message: "halaman categories",
  });
});

module.exports = router;
