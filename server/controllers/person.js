const Person = require('../models/Person');
const _ = require('lodash');


function getAll() {
  return Person.find({})
}


function getOne(id) {
  return Person.findById(id)
}


function create(data) {
  let fields = ['name', 'surname', 'city', 'address', 'phone'];
  let create_data = _.pick(data, fields);
  return new Person(create_data).save()
}


function remove(id) {
  return Person.findByIdAndDelete(id)
}


function update({id, data}) {
  let fields = ['name', 'surname', 'city', 'address', 'phone'];
  const update_data = _.pick(data, fields);
  return Person.findByIdAndUpdate(id, update_data, {new: true})
}


module.exports = {
  getAll,
  getOne,
  create,
  remove,
  update
}