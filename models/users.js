import { Schema, model, models } from 'mongoose';

const UsersSchema = new Schema({
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  avatar: String, 
  userType: String,
  interestedServices: [String],
  skills: String,
  projectImages: [String],
  position: {
    latitude: { 
      type: Number,
      required: true, 
    },
    longitude: { 
      type: Number,
      required: true,
    }
 }
});

const Users = models.Users || model('Users', UsersSchema);

export default Users;