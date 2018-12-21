const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');

const UserSchema = new mongoose.Schema({
  fullName: { type: String },
  userName: { type: String },
  email: { type: String, unique: true },
  address: { type: [Object] },
  phone: { type: [Object] },
  setting: { type: Object },
  type: { type: String },
  other:{ type:String },
  other2:{ type:String },
  other3:{ type:String },
  
  //infor user login on facebook
  facebook: {
    id: String,
    token: String,
    displayName: String,
    email: String,
  },

  //infor user login on google
  google:{
    id: String,
    token: String,
    displayName: String,
    email: String,
  }
});

UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

UserSchema.pre('save', function (next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt((saltError, salt) => {
    if (saltError) {
      return next(saltError);
    }

    bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) {
        return next(hashError);
      }
      user.password = hash;
      return next();
    });

  });

});

const User = mongoose.model('user', UserSchema);
module.exports = User;