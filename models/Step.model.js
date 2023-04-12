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
    date: {
      type: Date,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    actionplan: {
      type: Schema.Types.ObjectId,
      ref: 'Actionplan'
    }
  },
  {
    timestamps: true
  }
)

module.exports = model("Step", stepSchema);