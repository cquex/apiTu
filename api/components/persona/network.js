const express = require("express");
const controller = require("./controller");

const router = express.Router();

const post = (req, res) => {
  controller
    .insert(req)
    .then((persona) => {
      res.status(200).send({
        error: false,
        codigo: 0,
        data: persona,
      });
    })
    .catch((error) => {
      res.status(500).send({
        error: true,
        codigo: 500,
        data: error,
      });
    });
};

const put = (req, res) => {
  controller
    .change(req)
    .then((persona) => {
      res.status(200).send({
        error: false,
        codigo: 201,
        data: persona,
      });
    })
    .catch((error) => {
      res.status(500).send({
        error: true,
        codigo: 501,
        data: error,
      });
    });
};
const destroy = (req, res) => {
  controller
    .destroy(req)
    .then((persona) => {
      res.status(200).send({
        error: false,
        codigo: 201,
        data: persona,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({
        error: true,
        codigo: 501,
        data: error,
      });
    });
};
const get = (req, res, next) => {
  console.log("ca");
  controller
    .list(req)
    .then((personas) => {
      console.log(personas);
      res.status(200).send({
        error: false,
        codigo: 204,
        data: personas,
      });
    })
    .catch((error) => {
      res.status(500).send({
        error: true,
        codigo: 504,
        data: error,
      });
    });
};

router.post("/", post);
router.put("/:personaId", put);
router.delete("/:personaId", destroy);
router.get("/", get);

module.exports = router;
