// define schema
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExercisesSchema = new Schema({
  
});

const exercises = mongoose.model('exercises', ExercisesSchema);

module.exports = exercises;
