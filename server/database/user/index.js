import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: [{ detail: { type: String }, for: { type: String } }],
    phoneNumber: { type: Number },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.generateJwtToken = function () {
  return jwt.sign({ user: this._id.toString() }, "ZomatoApp");
};

UserSchema.statics.findEmailAndPhone = async (email, phoneNumber) => {
  const checkByEmail = await UserModel.findOne({ email });
  const checkByPhone = await UserModel.findOne({ phoneNumber });

  if (checkByEmail || checkByPhone) {
    throw new Error("User already exists");
  }
};

UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new Error("User doesn't exist");
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    throw new Error("Invalid Password");
  }
  return user;
};

UserSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  // salting and hashing
  bcrypt.genSalt(8, (error, salt) => {
    if (error) return next(error);
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);
      user.password = hash;
      return next();
    });
  });
});

export const UserModel = mongoose.model("Users", UserSchema);
