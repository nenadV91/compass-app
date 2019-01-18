const mongoose = require('mongoose');
const {Schema} = mongoose;


const personSchema = new Schema({
  name: String,
  surname: String,
  createdDate: {
    type: Date,
    default: Date.now
  },
  city: String,
  address: String,
  phone: String
})


personSchema.virtual('id').get(function(){
  return this._id.toHexString();
});


personSchema.set('toJSON', {
  virtuals: true
});


const Person = mongoose.model('Person', personSchema);
module.exports = Person;