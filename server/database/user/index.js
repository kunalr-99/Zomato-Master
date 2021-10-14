import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  emailId: { type: String, required: true },
  password: { type: String },
  address: [{ detail: { type: String }, for: { type: String } }],
  number: { type: Number },
});

export const UserModel = mongoose.model("Users", UserSchema);
