const bcrypt = require("bcryptjs");
const User = require("../models/user");
const sendEmail = require("../utils/sendEmail");

const registerUser = async (req, res) => {
  const { name, username, email, password, termsAccepted } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = await bcrypt.hashSync(password, salt);

  try {
    //check if user alredy existed

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "User with this username already exists" });
    }

    //create user
    const newUser = await User.create({
      name: name,
      username: username,
      email: email,
      password: hashPassword,
      termsAccepted: termsAccepted,
    });

    // sending message to email
    await sendEmail(name, email);

    res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const checkUser = async (req, res) => {
  try {
    const { username } = req.params;

    // Query the database to check if the user with the given username exists
    const existingUser = await User.findOne({ username });

    // Send the response indicating whether the user exists
    res.json({ exists: !!existingUser, existingUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const userProfile = async(req, res) =>{
  try {
    const {username} = req.params;

    const user = await User.findOne({username})
    res.json({user: user})
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
    }
  }

const getUser = async (req, res) => {
  try {
    const findPosts = await User.find();
    res.json(findPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createProfile = async (req, res) => {
  try {
    const { username } = req.params;
    const { image, location } = req.body;

    const user = await User.updateOne(
      { username: username },
      { $set: { image, location } }
    );
    console.log("user: ",user);
    res.status(200).json({ update: "successfull", user });
  } catch (error) {
    console.log("ERROR: ", error);
    res.status(400).json({ error: "update error" });
  }
};

module.exports = { registerUser, getUser, checkUser, createProfile, userProfile };
