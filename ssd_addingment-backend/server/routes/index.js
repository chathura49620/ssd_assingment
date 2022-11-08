const express = require("express");
const router = express.Router();
const controller = require("../controller/file.controller");
const Messagecontroller = require("../controller/message.controller");

let routes = (app) => {
  router.post("/file/upload", controller.upload);
  router.post("/message/save", Messagecontroller.addMessage);
  router.get("/file/files", controller.getListFiles);
  router.get("/file/files/:name", controller.download);

  app.use(router);
};

module.exports = routes;
