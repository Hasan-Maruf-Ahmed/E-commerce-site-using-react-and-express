const router = require("express").Router();
const validate = require("../utils/validateLogin");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(401).send({ message: "Invalid Email or password" });
    }

    const token = user.generateAuthToken();
    // console.log("Generating token...\n", token);

    res.status(200).send({ message:'Login successful', token: token, name: user.name });
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
    console.error(err);
  }
});

module.exports = router;
