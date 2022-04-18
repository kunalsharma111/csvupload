const express = require("express");
const router = express.Router();
const csvController = require("../controllers/tutorials/csv.controller");
const upload = require("../middlewares/upload");

let routes = (app) => {
  router.post("/upload", upload.single("file"), csvController.upload);
};

module.exports = routes;
