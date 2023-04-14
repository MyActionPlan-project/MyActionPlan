const { Schema, model } = require("mongoose");

const actionplanSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
    },
    category: {
      type: String,
      enum: ["DIY", "Vacation", "Event","Training","Other"],
      default: "",
      required: [true, "category is required."]
    },
      description:{
        type: String,
        required: [true, "Description is required."]
    },
      deadline: {
        type: Date
    },
      userId: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "User"
    },
      location: {
        type: String
    },
      image: {
        type: String
    },
     steps: [{ 
      type: Schema.Types.ObjectId,
      ref: 'Step',
      required: true
    }]    
  },
  {
    timestamps: true,
  }
)

module.exports = model("Actionplan", actionplanSchema);