const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
      default: "Enter your City",
    },
    from: {
      type: String,
      max: 50,
      default: "Enter your Country",
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3],
      default: 1,
    },
    clubs: {
      type: Array,
      default: [],
    },
    members: {
      type: Array,
      default: [],
    },
    isClub: {
      type: Boolean,
      default: false,
    },
    waiting: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
