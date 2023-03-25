const mongoose = require("mongoose");

const QueueSchema = new mongoose.Schema(
  {
    naiveid:{
        type: String,
    },
   des:{
       type: String,
   }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Queue", QueueSchema);
