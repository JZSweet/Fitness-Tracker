// define schema
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    }
    // exercises
});

const Workout = mongoose.model('workouts', WorkoutSchema);

module.exports = { Workout };
