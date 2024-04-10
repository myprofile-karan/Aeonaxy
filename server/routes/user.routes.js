const { registerUser, getUser, checkUser, createProfile, userProfile } = require("../controllers/user.controller");
const { Router } = require("express");

const router = Router()

router.route("/signup").post(registerUser)

router.route("/signup").get(getUser)
router.route("/check-user/:username").get(checkUser)

router.route("/update-user/:username").put(createProfile)
router.route("/user-profile/:username").get(userProfile)


module.exports = router;