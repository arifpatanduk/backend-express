const express = require("express")
const router = express.Router()
const UsersModel = require("../models/users")

// main users endpoint
router.get("/", async (req, res) => {
  const users = await UsersModel.findAll()
  console.log(users);

  res.status(200).json({
    data: "test",
    metadata: "test1234",
  })
})

module.exports = router
