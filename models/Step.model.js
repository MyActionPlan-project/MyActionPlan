const { Schema, model } = require("mongoose");

const stepSchema = new Schema(
  {
    action: {
      type: String,
      required: true
    },
    comment: {
      type: String, //textarea
      required: false
    },
    deadline: {
      type: Date,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ["Completed", "Pending","Unfinished"],
      required: true
    },
    actionplanId: {
      type: Schema.Types.ObjectId,
      ref: 'Actionplan'
    }
  },
  {
    timestamps: true
  }
)

module.exports = model("Step", stepSchema);