const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');


const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true, 
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: { validator: isEmail , message: 'Please enter a valid email.' }
    },
    thoughts: [
      {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
      }
    ],
    friends: [friendSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;