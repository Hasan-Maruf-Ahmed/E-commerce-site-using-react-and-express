const router = require("express").Router();

router.post('/', (req, res) => {
    res
    .status(200)
    .send({
      image_url: `http://localhost:${req.port}/images/${req.file.filename}`,
    });
});

module.exports = router;