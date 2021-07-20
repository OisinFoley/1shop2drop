import mongoose, { Schema } from 'mongoose';
import { UserModel } from '1shop2drop-types';

/** @class EcommerceUser */
const UserSchema: Schema = new Schema({
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateJoined: {
    type: Date,
    default: Date.now(),
  },
});

const user = mongoose.model<UserModel>('EcommerceUser', UserSchema);

export { user as User };
